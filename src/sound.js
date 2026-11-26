import { useEffect, useRef, useState } from 'react'

// 内置三首：Biscuit and Tea → Mismatch → 原来的八音盒版《平安夜》
const builtInTracks = [
  { id: 'biscuit', title: 'Biscuit and Tea · Gabriella Lin', file: 'biscuit-and-tea.mp3' },
  { id: 'mismatch', title: 'Mismatch · Gabriella Lin', file: 'mismatch.mp3' },
  { id: 'silent-night', title: 'Silent Night · Music Box', file: 'silent-night-music-box.mp3' },
]
const audioOverrides = typeof window !== 'undefined' ? window.__AURORA_AUDIO_TRACKS__ : null
const builtInEntries = builtInTracks.map(track => ({
  ...track,
  url: (audioOverrides && audioOverrides[track.id]) || import.meta.env.BASE_URL + 'audio/' + track.file,
  local: false,
}))
export const defaultTrack = builtInEntries[0].url

export function useSound(level) {
  const element = useRef(null)
  const graph = useRef(null)
  const requested = useRef(true)
  const revision = useRef(0)
  const playlistRef = useRef(builtInEntries)
  const currentRef = useRef('biscuit')
  const playTrackRef = useRef(null)
  const [playlist, setPlaylist] = useState(builtInEntries)
  const [currentId, setCurrentId] = useState('biscuit')
  const [playing, setPlaying] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [title, setTitle] = useState(builtInEntries[0].title)
  const [failed, setFailed] = useState(false)

  function connect() {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    if (!graph.current) {
      const context = new AudioContext()
      const source = context.createMediaElementSource(element.current)
      const analyser = context.createAnalyser()
      analyser.fftSize = 256
      analyser.smoothingTimeConstant = .79
      source.connect(analyser)
      analyser.connect(context.destination)
      graph.current = { context, analyser, values: new Uint8Array(analyser.frequencyBinCount) }
    }
    const context = graph.current.context
    if (context.state === 'suspended') context.resume().catch(() => {})
  }

  async function play(interaction = false) {
    const audio = element.current
    if (!audio) return
    const id = ++revision.current
    requested.current = true
    if (interaction) { try { connect() } catch {} }
    try {
      await audio.play()
      if (id !== revision.current) return
      setBlocked(false)
      setFailed(false)
    } catch (error) {
      if (id !== revision.current) return
      setBlocked(error.name === 'NotAllowedError')
      setFailed(error.name === 'NotSupportedError')
    }
  }

  function pause() {
    revision.current++
    requested.current = false
    element.current?.pause()
    setBlocked(false)
  }

  function unlock() {
    if (!requested.current || !element.current) return
    if (element.current.paused) play(true)
    else { try { connect() } catch {} }
  }

  function playTrack(track, interaction = true) {
    const audio = element.current
    if (!audio || !track) return
    currentRef.current = track.id
    setCurrentId(track.id)
    setTitle(track.title)
    setFailed(false)
    setBlocked(false)
    requested.current = true
    if (audio.getAttribute('src') !== track.url) {
      audio.src = track.url
      audio.load()
    } else if (audio.ended) {
      audio.currentTime = 0
    }
    play(interaction)
  }
  playTrackRef.current = playTrack

  function step(delta) {
    const list = playlistRef.current
    const index = list.findIndex(track => track.id === currentRef.current)
    const track = list[(index + delta + list.length) % list.length]
    if (track) playTrack(track, true)
  }

  function next() { step(1) }
  function prev() { step(-1) }

  function select(id) {
    const track = playlistRef.current.find(item => item.id === id)
    if (track) playTrack(track, true)
  }

  function upload(files) {
    const inputs = Array.from(files || []).filter(file => file && (
      file.type.startsWith('audio/') || /\.(mp3|m4a|wav|ogg|flac|aac|opus|weba)$/i.test(file.name)
    ))
    if (!inputs.length) return
    const stamp = Date.now()
    const entries = inputs.map((file, index) => ({
      id: `local-${stamp}-${index}`,
      title: file.name.replace(/\.[^.]+$/, ''),
      url: URL.createObjectURL(file),
      local: true,
    }))
    const before = playlistRef.current
    const list = [...before, ...entries]
    playlistRef.current = list
    setPlaylist(list)
    // 第一次上传时直接播放第一首；之后加入队列，不打断正在播放的曲目
    if (before.every(track => !track.local)) playTrack(entries[0], true)
    else if (!requested.current) playTrack(entries[0], true)
  }

  function remove(id) {
    const track = playlistRef.current.find(item => item.id === id)
    if (!track || !track.local) return
    const list = playlistRef.current.filter(item => item.id !== id)
    const wasCurrent = currentRef.current === id
    const oldIndex = playlistRef.current.findIndex(item => item.id === id)
    playlistRef.current = list
    setPlaylist(list)
    if (wasCurrent) {
      const nextTrack = list[oldIndex % list.length] || list[0]
      if (nextTrack) playTrack(nextTrack, true)
    }
    URL.revokeObjectURL(track.url)
  }

  useEffect(() => {
    const audio = element.current
    const start = () => setPlaying(true)
    const stop = () => setPlaying(false)
    const error = () => {
      setPlaying(false)
      setFailed(true)
    }
    const ended = () => {
      const list = playlistRef.current
      const index = list.findIndex(track => track.id === currentRef.current)
      const track = list[(index + 1) % list.length]
      if (track) playTrackRef.current(track, true)
    }
    audio.addEventListener('playing', start)
    audio.addEventListener('pause', stop)
    audio.addEventListener('error', error)
    audio.addEventListener('ended', ended)
    audio.volume = .58
    play()
    let frame
    function analyse() {
      const chain = graph.current
      if (chain && !audio.paused) {
        chain.analyser.getByteFrequencyData(chain.values)
        let sum = 0
        for (let i = 1; i < chain.values.length; i++) sum += chain.values[i]
        level.current = Math.min(1, sum / ((chain.values.length - 1) * 72))
      } else level.current = 0
      frame = requestAnimationFrame(analyse)
    }
    frame = requestAnimationFrame(analyse)
    return () => {
      revision.current++
      audio.pause()
      audio.removeEventListener('playing', start)
      audio.removeEventListener('pause', stop)
      audio.removeEventListener('error', error)
      audio.removeEventListener('ended', ended)
      cancelAnimationFrame(frame)
      graph.current?.context.close().catch(() => {})
      for (const track of playlistRef.current) {
        if (track.local) URL.revokeObjectURL(track.url)
      }
    }
  }, [level])

  return {
    element, playing, blocked, title, failed,
    playlist, currentId,
    upload, select, remove, next, prev, unlock,
    toggle: () => playing ? pause() : play(true),
  }
}
