# Render a small, original music-box arrangement of the public-domain Silent Night.
from pathlib import Path
import subprocess
import tempfile
import wave
import numpy as np

SAMPLE_RATE = 24000
BEAT = .49
VOLUME = .68

MELODY = [
    ("G4", 1.5), ("A4", .5), ("G4", 1), ("E4", 3),
    ("G4", 1.5), ("A4", .5), ("G4", 1), ("E4", 3),
    ("D5", 2), ("D5", 1), ("B4", 3),
    ("C5", 2), ("C5", 1), ("G4", 3),
    ("A4", 2), ("A4", 1), ("C5", 1.5), ("B4", .5), ("A4", 1),
    ("G4", 1.5), ("A4", .5), ("G4", 1), ("E4", 3),
    ("A4", 2), ("A4", 1), ("C5", 1.5), ("B4", .5), ("A4", 1),
    ("G4", 1.5), ("A4", .5), ("G4", 1), ("E4", 3),
    ("D5", 2), ("D5", 1), ("F5", 1.5), ("D5", .5), ("B4", 1),
    ("C5", 3), ("E5", 3),
    ("C5", 1), ("G4", 1), ("E4", 1), ("G4", 1.5), ("F4", .5), ("D4", 1),
    ("C4", 5),
]
CHORDS = [
    "C", "C", "C", "C", "G", "G", "C", "C",
    "F", "F", "C", "C", "F", "F", "C", "C",
    "G", "G", "C", "C", "C", "G", "C", "C",
]
NOTES = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}
HARMONY = {
    "C": ("C3", "G3", "E4", "G4"),
    "G": ("G2", "D3", "B3", "D4"),
    "F": ("F2", "C3", "A3", "C4"),
}

def frequency(note):
    midi = (int(note[-1]) + 1) * 12 + NOTES[note[0]]
    return 440 * 2 ** ((midi - 69) / 12)

def render():
    total = int((6 + 72 + 5) * BEAT * SAMPLE_RATE)
    music = np.zeros((total, 2))
    def add(note, position, length, gain, pan, bell=False):
        start = round(position * BEAT * SAMPLE_RATE)
        duration = min(total-start, round((length*BEAT + 2.1)*SAMPLE_RATE))
        if duration <= 0:
            return
        t = np.arange(duration) / SAMPLE_RATE
        phase = np.pi * 2 * frequency(note) * t
        if bell:
            tone = (.79*np.sin(phase)*np.exp(-1.85*t)
                    + .19*np.sin(phase*2.003)*np.exp(-3.8*t)
                    + .095*np.sin(phase*3.01)*np.exp(-6.8*t)
                    + .069*np.sin(phase*4.22)*np.exp(-11*t)
                    + .024*np.sin(phase*6.25)*np.exp(-21*t))
        else:
            tone = (.80*np.sin(phase)+.16*np.sin(phase*2)+.04*np.sin(phase*3))*np.exp(-1.8*t)
        fade = np.minimum(1,t/.013)
        fade *= np.minimum(1,(duration/SAMPLE_RATE-t)/.16)
        tone *= fade*gain
        music[start:start+duration,0] += tone*(1-pan)**.5
        music[start:start+duration,1] += tone*pan**.5

    beat = 6
    for index, (note, length) in enumerate(MELODY):
        add(note,beat,length,.27,.40+(index%3)*.083,True)
        beat += length
    for index, key in enumerate(["C","G"]+CHORDS):
        chord = HARMONY[key]
        section=index*3
        add(chord[0],section,2.25,.115,.40)
        add(chord[1],section+.91,1,.077,.32)
        add(chord[2],section+1.53,1.1,.067,.62,True)
        add(chord[3],section+2.42,.6,.043,.71,True)
    add("C3",78,1.7,.08,.46)
    add("G4",78.8,1.2,.07,.64,True)
    add("C5",79.4,1.26,.055,.61,True)

    original=music.copy()
    for delay, gain in [(0.133,.17),(.231,.13),(.339,.10),(.501,.076),(.661,.057),(.859,.035)]:
        offset=round(delay*SAMPLE_RATE)
        music[offset:,0]+=original[:-offset,1]*gain
        music[offset:,1]+=original[:-offset,0]*gain
    music[-SAMPLE_RATE:]*=np.linspace(1,0,SAMPLE_RATE)[:,None]
    music*=VOLUME/np.max(np.abs(music))
    output=Path(__file__).resolve().parents[1]/"public"/"audio"/"silent-night-music-box.mp3"
    output.parent.mkdir(parents=True,exist_ok=True)
    with tempfile.TemporaryDirectory() as directory:
        wav=Path(directory)/"music.wav"
        with wave.open(str(wav),"wb") as file:
            file.setnchannels(2)
            file.setsampwidth(2)
            file.setframerate(SAMPLE_RATE)
            file.writeframes((music*32767).astype("<i2").tobytes())
        subprocess.run(["ffmpeg","-loglevel","error","-y","-i",str(wav),"-b:a","80k",str(output)],check=True)

if __name__=="__main__":
    render()
