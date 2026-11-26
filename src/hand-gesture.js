export const idleHand = { x: .5, y: .5, present: false, gesture: 'idle', pinch: false, hands: 0 }

const fingers = [[5, 6, 8], [9, 10, 12], [13, 14, 16], [17, 18, 20]]
const trackingGraceMs = 700

function makeHand(marks, worldMarks, aspect) {
  const hasDepth = worldMarks?.length === 21
  const points = hasDepth ? worldMarks : marks
  const xScale = hasDepth ? 1 : aspect
  const vector = (a, b) => [
    (points[b].x - points[a].x) * xScale,
    points[b].y - points[a].y,
    hasDepth ? points[b].z - points[a].z : 0,
  ]
  const distance = (a, b) => Math.hypot(...vector(a, b))
  const palm = Math.max(.018, distance(0, 9), distance(5, 17) * .96)

  const fullyCurled = fingers.every(([base, joint, tip]) => {
    const inward = vector(base, joint)
    const outward = vector(joint, tip)
    const alignment = inward.reduce((sum, component, i) => sum + component * outward[i], 0)
    return alignment < .42 * Math.hypot(...inward) * Math.hypot(...outward)
      && distance(tip, base) < palm * .58
      && distance(tip, 0) < distance(joint, 0) * 1.02
  })
  const fullyOpen = fingers.every(([, joint, tip]) => distance(tip, 0) > distance(joint, 0) * 1.17)
  const thumbToPalm = distance(4, 9)
  const thumbTucked = thumbToPalm < palm * .74 && thumbToPalm < distance(3, 9) + palm * .06

  // 捏合：拇指和食指伸出相碰，且其余三指仍然张开（张开手掌的捏合）
  const indexExtended = distance(8, 0) > distance(6, 0) * 1.1
  const thumbExtended = distance(4, 0) > distance(3, 0) * 1.05
  const middleOpen = distance(12, 0) > distance(10, 0) * 1.12
  const ringOpen = distance(16, 0) > distance(14, 0) * 1.12
  const pinkyOpen = distance(20, 0) > distance(18, 0) * 1.12
  const pinchShape = indexExtended && thumbExtended && middleOpen && ringOpen && pinkyOpen

  // 捏合用“画面坐标”看拇指-食指接触；两只手分开独立判定
  const imagePalm = Math.max(.018,
    Math.hypot((marks[9].x - marks[0].x) * aspect, marks[9].y - marks[0].y),
    Math.hypot((marks[17].x - marks[5].x) * aspect, marks[17].y - marks[5].y) * .96,
  )
  const gap = Math.hypot((marks[4].x - marks[8].x) * aspect, marks[4].y - marks[8].y) / imagePalm
  return {
    open: fullyOpen,
    fist: fullyCurled && thumbTucked,
    gap,
    pinchShape,
    index: { x: marks[8].x, y: marks[8].y },
  }
}

export function createHandTracker() {
  let current = idleHand
  let lastSeen = -Infinity
  let missingFrames = 0
  let candidate = 'idle'
  let candidateSince = 0
  let pinchGapSmooth = 1

  return (marksList, worldList, aspect, now) => {
    const hands = Array.isArray(marksList) ? marksList.filter(Boolean) : (marksList ? [marksList] : [])
    if (!hands.length) {
      missingFrames++
      candidate = current.gesture
      candidateSince = now
      pinchGapSmooth = 1
      if (missingFrames >= 4 && now - lastSeen > trackingGraceMs) current = idleHand
      return current
    }
    lastSeen = now
    missingFrames = 0

    const features = hands.map((marks, i) => makeHand(marks, worldList?.[i], aspect))

    // 在满足“张开手掌的捏合”形状的手里选拇指-食指最近的一只，并对间距做平滑
    const candidates = []
    for (let i = 0; i < features.length; i++) {
      if (features[i].pinchShape) candidates.push({ i, gap: features[i].gap })
    }
    const best = candidates.length ? candidates.reduce((a, b) => (a.gap < b.gap ? a : b)) : null
    pinchGapSmooth = best ? pinchGapSmooth * .55 + best.gap * .45 : 1
    const pinchExit = current.gesture === 'pinch' ? .52 : .34
    const pinching = best && pinchGapSmooth < pinchExit ? best.i : -1

    const allOpen = features.every(hand => hand.open)
    const allFist = features.every(hand => hand.fist)

    // 捏合优先：只要拇指-食指相碰且其余三指张开，就判捏合而不是握拳/星光收回
    const next = pinching >= 0 ? 'pinch' : allOpen ? 'open' : allFist ? 'fist' : 'hover'
    if (next !== candidate) {
      candidate = next
      candidateSince = now
    }
    let gesture = current.present ? current.gesture : 'hover'
    const confirmation = next === 'fist' ? 160 : next === 'open' ? 90 : next === 'pinch' ? 140 : 90
    if (now - candidateSince >= confirmation) gesture = next

    // 光标优先跟随正在捏合的那只手；否则跟随第一只手
    const source = pinching >= 0 ? features[pinching] : features[0]
    const x = Math.min(1, Math.max(0, 1 - source.index.x))
    const y = Math.min(1, Math.max(0, source.index.y))
    const smoothing = current.present && gesture !== 'fist' ? .4 : 1
    current = {
      x: current.x + (x - current.x) * smoothing,
      y: current.y + (y - current.y) * smoothing,
      present: true,
      gesture,
      pinch: gesture === 'pinch',
      hands: features.length,
    }
    return current
  }
}
