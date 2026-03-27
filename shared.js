// ── CHARS (모양)
const CHARS = [
  { id: 'cat',   name: 'NEKO'  },
  { id: 'robot', name: 'ROBO'  },
  { id: 'ghost', name: 'BOING' },
  { id: 'dino',  name: 'REX'   },
  { id: 'mage',  name: 'MAGE'  },
  { id: 'frog',  name: 'FROG'  },
  { id: 'alien', name: 'ALIEN' },
  { id: 'panda', name: 'PANDA' },
];

// ── COLORS (색상)
const COLORS = [
  { id: 'yellow',  name: '🟡 옐로',   hex: '#f5a623', palette: ['#f5a623','#fff8','#333','#e88a00','#ffe0a0'] },
  { id: 'cyan',    name: '🔵 시안',   hex: '#00ccff', palette: ['#00ccff','#fff8','#333','#0088aa','#aaeeff'] },
  { id: 'purple',  name: '🟣 퍼플',   hex: '#a855f7', palette: ['#a855f7','#fff8','#333','#7c3aed','#ddd8fe'] },
  { id: 'green',   name: '🟢 그린',   hex: '#00ff88', palette: ['#00ff88','#fff8','#333','#00b360','#b0ffe0'] },
  { id: 'pink',    name: '🩷 핑크',   hex: '#ff6eb4', palette: ['#ff6eb4','#fff8','#333','#c0005a','#ffd6ec'] },
  { id: 'red',     name: '🔴 레드',   hex: '#ff4444', palette: ['#ff4444','#fff8','#333','#aa0000','#ffaaaa'] },
  { id: 'lime',    name: '💚 라임',   hex: '#b8ff3c', palette: ['#b8ff3c','#fff8','#111','#5a8000','#eaffb0'] },
  { id: 'white',   name: '⚪ 화이트', hex: '#e8e8e8', palette: ['#e8e8e8','#fff8','#555','#aaaaaa','#ffffff'] },
  { id: 'orange',  name: '🟠 오렌지', hex: '#ff8c00', palette: ['#ff8c00','#fff8','#333','#c05000','#ffd080'] },
  { id: 'sky',     name: '🩵 스카이', hex: '#38bdf8', palette: ['#38bdf8','#fff8','#333','#0369a1','#bae6fd'] },
  { id: 'rose',    name: '🌹 로즈',   hex: '#fb7185', palette: ['#fb7185','#fff8','#333','#be123c','#fecdd3'] },
  { id: 'mint',    name: '🌿 민트',   hex: '#2dd4bf', palette: ['#2dd4bf','#fff8','#333','#0d9488','#99f6e4'] },
];

const SPRITE_DATA = {
  // \\uace0\\uc591\\uc774: \\ubfb0\\uc871 \\uadc0, \\uc218\\uc5fc
  cat: [
    '0001100000011000',
    '0011100000001100',
    '0011111111111100',
    '0111111111111110',
    '0111111111111110',
    '0111133111331110',
    '0111111111111110',
    '0111101010111110',
    '0011111001111100',
    '0011111111111100',
    '0001111111111000',
    '0001111111111000',
    '0000111111110000',
    '0001100110011000',
    '0011000000001100',
    '0011000000001100',
  ],
  // \\ub85c\\ubd07: \\uc548\\ud14c\\ub098, \\uc0ac\\uac01 \\uba38\\ub9ac
  robot: [
    '0000000110000000',
    '0000000110000000',
    '0000111111110000',
    '0001111111111000',
    '0011100110001100',
    '0011133110331100',
    '0011100110001100',
    '0001111111111000',
    '0000111111110000',
    '0001555555551000',
    '0011511111151100',
    '0011511111151100',
    '0001555555551000',
    '0000110000011000',
    '0000110000011000',
    '0001110000011100',
  ],
  // \\uc720\\ub839: \\ubb3c\\uacb0 \\uc544\\ub7ab\\ubd80\\ubd84, \\ub3d9\\uadf8\\ub780 \\ub208
  ghost: [
    '0000011111100000',
    '0000111111110000',
    '0001111111111000',
    '0011111111111100',
    '0011133111331100',
    '0011111111111100',
    '0011111111111100',
    '0011101010111100',
    '0011111111111100',
    '0011111111111100',
    '0011111111111100',
    '0011111111111100',
    '0011110011111100',
    '0011001100011100',
    '0001100000001000',
    '0000000000000000',
  ],
  // \\uacf5\\ub8e1: \\ub4f1 \\uac00\\uc2dc, \\ub450\\uaebc\\uc6b4 \\uaf2c\\ub9ac
  dino: [
    '0000001100000000',
    '0000011110000000',
    '0000111111000000',
    '0001111111100000',
    '0001113111100000',
    '0001111111111000',
    '0011111111111100',
    '0011101111011100',
    '0001111111111000',
    '0001111111110000',
    '0001111111100000',
    '0001111100000000',
    '0001111110000000',
    '0001110111000000',
    '0001100001100000',
    '0000000000000000',
  ],
  // \\ub9c8\\ubc95\\uc0ac: \\ubfb0\\uc871 \\ubaa8\\uc790, \\uc9c0\\ud321\\uc774
  mage: [
    '0000001110000000',
    '0000011111000000',
    '0000111111100000',
    '0001111111110000',
    '0011111111111000',
    '0001111111110000',
    '0001111111110000',
    '0001133111310000',
    '0001111111110000',
    '0001101001110000',
    '0001111111110000',
    '0001511111150000',
    '0001511111150000',
    '0001510000150000',
    '0000110000110000',
    '0001110000111000',
  ],
  // \\uac1c\\uad6c\\ub9ac: \\ubcfc\\ub85d \\ub208, \\ub113\\uc740 \\uc785
  frog: [
    '0011000000001100',
    '0111330000331110',
    '0111111111111110',
    '0011111111111100',
    '0011132112311100',
    '0011111111111100',
    '0011101001011100',
    '0001111111111000',
    '0011111111111100',
    '0011111111111100',
    '0011111111111100',
    '0001111111111000',
    '0001100000011000',
    '0001100000011000',
    '0011100000001100',
    '0011000000001100',
  ],
  // \\uc678\\uacc4\\uc778: \\ud070 \\uba38\\ub9ac, \\uae38\\ucb49 \\ub208
  alien: [
    '0000011111100000',
    '0000111111110000',
    '0001111111111000',
    '0011111111111100',
    '0011133333311100',
    '0011133333311100',
    '0011111111111100',
    '0000111111110000',
    '0000111111110000',
    '0001111111111000',
    '0011111111111100',
    '0011111001111100',
    '0001111111111000',
    '0000111111110000',
    '0001100000011000',
    '0001100000011000',
  ],
  // \\ud310\\ub2e4: \\ud770 \\ubab8, \\uac80\\uc815 \\uadc0/\\ub208 \\ud328\\uce58
  panda: [
    '0022000000002200',
    '0222100000012220',
    '0221111111112200',
    '0011111111111100',
    '0011111111111100',
    '0011122112211100',
    '0011111111111100',
    '0011101001011100',
    '0001111111111000',
    '0001111111111000',
    '0000111111110000',
    '0002111111120000',
    '0002111111120000',
    '0002100000120000',
    '0001100000011000',
    '0000000000000000',
  ],
};

// ── Sprint 4: 좌석 캐릭터 아이들 모션 (room.html과 동기화)
const IDLE_MOTIONS = {
  bob:        { frames: 4, offsetY: [0, -1, -2, -1], speed: 300 },
  nod:        { frames: 3, offsetY: [0, -2, 0], speed: 250 },
  tap:        { frames: 2, scaleY: [1.0, 0.95], speed: 200 },
  look_left:  { frames: 2, flipX: [false, true], speed: 500 },
  look_right: { frames: 2, flipX: [true, false], speed: 500 },
  stretch:    { frames: 4, offsetY: [0, -1, -3, -1], speed: 350 },
  float:      { frames: 4, offsetY: [0, -2, -3, -2], speed: 420 },
  sway:       { frames: 4, offsetX: [0, -2, 2, 0], speed: 380 },
  mech_pulse: { frames: 2, scaleY: [1.0, 0.92], speed: 160 },
  hop:        { frames: 3, offsetY: [0, -4, 0], speed: 220 },
};

const CHAR_MOTION_WEIGHT = {
  cat:   { bob: 3, nod: 2, look_left: 2, look_right: 2, tap: 1, stretch: 2, sway: 2 },
  robot: { bob: 1, nod: 3, tap: 2, look_left: 1, look_right: 1, stretch: 1, mech_pulse: 4 },
  ghost: { bob: 1, nod: 1, look_left: 2, look_right: 2, tap: 1, stretch: 1, float: 5, sway: 2 },
  dino:  { bob: 2, nod: 2, tap: 3, look_left: 1, look_right: 1, stretch: 3, hop: 2 },
  mage:  { bob: 2, nod: 2, look_left: 2, look_right: 2, tap: 2, stretch: 2, sway: 1 },
  frog:  { bob: 2, nod: 1, tap: 3, look_left: 2, look_right: 2, stretch: 2, hop: 3 },
  alien: { bob: 3, nod: 3, tap: 1, look_left: 2, look_right: 2, stretch: 1, sway: 2 },
  panda: { bob: 4, nod: 2, tap: 1, look_left: 2, look_right: 2, stretch: 1, sway: 1 },
};

// ── CHAR_PROFILE (아이들 리듬 + 이모지 리액션 오버라이드) — room.html 인라인과 동기화
const CHAR_PROFILE = {
  _default: {
    persona: '',
    idleDelayMul: 1,
    idleSpeedMul: 1,
    motionAdd: {},
    emoji: {},
  },
  cat: {
    persona: '호기심 많은 네코',
    idleDelayMul: 1,
    idleSpeedMul: 1,
    motionAdd: {},
    emoji: {
      '🎵': { anim: 'dance', ms: 650 }, '👍': { anim: 'jump-soft', ms: 450 }, '❤️': { anim: 'jump-soft', ms: 500 },
      '🔥': { anim: 'dance', ms: 650 }, '⭐': { anim: 'jump', ms: 550 }, '❄️': { anim: 'shake', ms: 500 },
      '💧': { anim: 'cry', ms: 750 }, '🎉': { anim: 'celebrate', ms: 600 }, '😂': { anim: 'jump', ms: 500 },
    },
  },
  robot: {
    persona: '리듬이 딱딱한 봇',
    idleDelayMul: 0.92,
    idleSpeedMul: 0.88,
    motionAdd: {},
    emoji: {
      '🎵': { anim: 'dance', ms: 700 }, '👍': { anim: 'jump-soft', ms: 400 }, '❤️': { anim: 'shake', ms: 550 },
      '🔥': { anim: 'dance', ms: 700 }, '⭐': { anim: 'spin', ms: 450 }, '❄️': { anim: 'shake', ms: 500 },
      '💧': { anim: 'shake', ms: 600 }, '🎉': { anim: 'jump-soft', ms: 500 }, '😂': { anim: 'shake', ms: 550 },
    },
  },
  ghost: {
    persona: '둥실 떠다니는 유령',
    idleDelayMul: 1.12,
    idleSpeedMul: 1.15,
    motionAdd: {},
    emoji: {
      '🎵': { anim: 'spin', ms: 700 }, '👍': { anim: 'celebrate', ms: 500 }, '❤️': { anim: 'celebrate', ms: 550 },
      '🔥': { anim: 'shake', ms: 550 }, '⭐': { anim: 'spin', ms: 800 }, '❄️': { anim: 'shake', ms: 600 },
      '💧': { anim: 'celebrate', ms: 550 }, '🎉': { anim: 'spin', ms: 650 }, '😂': { anim: 'wiggle', ms: 550 },
    },
  },
  dino: {
    persona: '힘 있는 덩치',
    idleDelayMul: 1.05,
    idleSpeedMul: 1.02,
    motionAdd: {},
    emoji: {
      '🎵': { anim: 'dance', ms: 700 }, '👍': { anim: 'jump', ms: 600 }, '❤️': { anim: 'celebrate', ms: 750 },
      '🔥': { anim: 'celebrate', ms: 700 }, '⭐': { anim: 'jump-soft', ms: 500 }, '❄️': { anim: 'cry', ms: 800 },
      '💧': { anim: 'cry', ms: 750 }, '🎉': { anim: 'celebrate', ms: 800 }, '😂': { anim: 'shake', ms: 600 },
    },
  },
  mage: {
    persona: '여유로운 마법사',
    idleDelayMul: 1.02,
    idleSpeedMul: 1.05,
    motionAdd: {},
    emoji: {
      '🎵': { anim: 'spin', ms: 700 }, '👍': { anim: 'jump-soft', ms: 500 }, '❤️': { anim: 'spin', ms: 850 },
      '🔥': { anim: 'spin', ms: 650 }, '⭐': { anim: 'spin', ms: 900 }, '❄️': { anim: 'shake', ms: 550 },
      '💧': { anim: 'cry', ms: 750 }, '🎉': { anim: 'celebrate', ms: 650 }, '😂': { anim: 'celebrate', ms: 550 },
    },
  },
  frog: {
    persona: '통통 튀는 개구리',
    idleDelayMul: 0.88,
    idleSpeedMul: 0.92,
    motionAdd: {},
    emoji: {
      '🎵': { anim: 'celebrate', ms: 480 }, '👍': { anim: 'jump', ms: 500 }, '❤️': { anim: 'jump', ms: 550 },
      '🔥': { anim: 'jump', ms: 600 }, '⭐': { anim: 'jump', ms: 550 }, '❄️': { anim: 'cry', ms: 750 },
      '💧': { anim: 'celebrate', ms: 600 }, '🎉': { anim: 'jump', ms: 600 }, '😂': { anim: 'jump', ms: 500 },
    },
  },
  alien: {
    persona: '이질적인 외계인',
    idleDelayMul: 1,
    idleSpeedMul: 1,
    motionAdd: {},
    emoji: {
      '🎵': { anim: 'wiggle', ms: 600 }, '👍': { anim: 'wiggle', ms: 500 }, '❤️': { anim: 'wiggle', ms: 550 },
      '🔥': { anim: 'dance', ms: 650 }, '⭐': { anim: 'spin', ms: 600 }, '❄️': { anim: 'shake', ms: 550 },
      '💧': { anim: 'wiggle', ms: 550 }, '🎉': { anim: 'wiggle', ms: 600 }, '😂': { anim: 'wiggle', ms: 600 },
    },
  },
  panda: {
    persona: '느긋한 판다',
    idleDelayMul: 1.08,
    idleSpeedMul: 1.06,
    motionAdd: {},
    emoji: {
      '🎵': { anim: 'celebrate', ms: 550 }, '👍': { anim: 'jump-soft', ms: 550 }, '❤️': { anim: 'celebrate', ms: 550 },
      '🔥': { anim: 'shake', ms: 550 }, '⭐': { anim: 'celebrate', ms: 600 }, '❄️': { anim: 'shake', ms: 600 },
      '💧': { anim: 'cry', ms: 800 }, '🎉': { anim: 'celebrate', ms: 500 }, '😂': { anim: 'shake', ms: 500 },
    },
  },
};

function mergeCharProfile(charId) {
  const base = CHAR_PROFILE._default || {};
  const p = CHAR_PROFILE[charId] || {};
  return {
    persona: p.persona != null ? p.persona : base.persona,
    idleDelayMul: p.idleDelayMul != null ? p.idleDelayMul : base.idleDelayMul,
    idleSpeedMul: p.idleSpeedMul != null ? p.idleSpeedMul : base.idleSpeedMul,
    motionAdd: { ...(base.motionAdd || {}), ...(p.motionAdd || {}) },
    emoji: { ...(base.emoji || {}), ...(p.emoji || {}) },
  };
}

function mergedMotionWeights(charId) {
  const base = CHAR_MOTION_WEIGHT[charId] || CHAR_MOTION_WEIGHT.cat;
  const add = mergeCharProfile(charId).motionAdd;
  const out = { ...base };
  Object.keys(add).forEach(k => {
    out[k] = (out[k] || 0) + add[k];
  });
  return out;
}

// ── drawSprite
function drawSprite(canvasEl, charId, scale=3, colorId=null) {
  const colorData = colorId ? COLORS.find(c => c.id === colorId) : COLORS[0];
  const palette = colorData ? colorData.palette : COLORS[0].palette;
  const rows = SPRITE_DATA[charId] || SPRITE_DATA.cat;
  canvasEl.width = 16 * scale;
  canvasEl.height = 16 * scale;
  const ctx = canvasEl.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const colors = {
    '0':'transparent','1':palette[0],'2':palette[1],
    '3':palette[2],'4':palette[3],'5':palette[4],
  };
  rows.forEach((row, y) => {
    [...row].forEach((px, x) => {
      if (px === '0') return;
      ctx.fillStyle = colors[px] || palette[0];
      ctx.fillRect(x * scale, y * scale, scale, scale);
    });
  });
}

// ── selectedChar/Color (index.html과 room.html 공통 상태)
let selectedChar = CHARS[0].id;
let selectedColor = COLORS[0].id;

// ── renderCharPicker
function renderCharPicker() {
  const container = document.getElementById('char-picker');
  if (!container) return;
  container.innerHTML = CHARS.map(c => `
    <div class="char-option ${c.id === selectedChar ? 'selected' : ''}" data-char="${c.id}">
      <canvas class="sprite" data-char="${c.id}" width="48" height="48"></canvas>
      <span class="char-name">${c.name}</span>
    </div>
  `).join('');
  container.querySelectorAll('canvas.sprite').forEach(cv => {
    drawSprite(cv, cv.dataset.char, 3, selectedColor);
  });
  container.querySelectorAll('.char-option').forEach(opt => {
    opt.addEventListener('click', () => {
      selectedChar = opt.dataset.char;
      container.querySelectorAll('.char-option').forEach(o =>
        o.classList.toggle('selected', o.dataset.char === selectedChar));
      if (typeof saveProfile === 'function') saveProfile();
    });
  });
  renderColorPicker();
}

// ── renderColorPicker
function renderColorPicker() {
  const container = document.getElementById('color-picker');
  if (!container) return;
  container.innerHTML = COLORS.map(c => `
    <div class="color-option ${c.id === selectedColor ? 'selected' : ''}"
         data-color="${c.id}" style="background:${c.hex};" title="${c.name}">
      <span class="color-check">✓</span>
    </div>
  `).join('');
  container.querySelectorAll('.color-option').forEach(opt => {
    opt.addEventListener('click', () => {
      selectedColor = opt.dataset.color;
      container.querySelectorAll('.color-option').forEach(o =>
        o.classList.toggle('selected', o.dataset.color === selectedColor));
      document.querySelectorAll('canvas.sprite[data-char]').forEach(cv => {
        drawSprite(cv, cv.dataset.char, 3, selectedColor);
      });
      if (typeof saveProfile === 'function') saveProfile();
    });
  });
}
