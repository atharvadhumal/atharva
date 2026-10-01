import photoUrl from "../../assets/profile-photo.png";

// Matches the size of one card face in card.glb's 1678px texture atlas.
const FACE_W = 839;
const FACE_H = 1266;
const PAD = 64;

const COLORS = {
  bg: "#0b0b0d",
  text: "#fafafa",
  muted: "#a1a1aa",
  dim: "#71717a",
  line: "#27272a",
  green: "#39d353",
};

const SANS = "Sora, ui-sans-serif, system-ui, sans-serif";
const MONO = '"IBM Plex Mono", ui-monospace, monospace';

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadFonts() {
  if (!document.fonts?.load) return;
  await Promise.all([
    document.fonts.load(`600 64px Sora`),
    document.fonts.load(`400 32px Sora`),
    document.fonts.load(`500 26px "IBM Plex Mono"`),
  ]).catch(() => {});
}

function createFace() {
  const canvas = document.createElement("canvas");
  canvas.width = FACE_W;
  canvas.height = FACE_H;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, FACE_W, FACE_H);
  const glow = ctx.createRadialGradient(FACE_W * 0.2, 0, 0, FACE_W * 0.2, 0, FACE_H * 0.8);
  glow.addColorStop(0, "rgba(255,255,255,0.07)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, FACE_W, FACE_H);

  return { canvas, ctx };
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Top band is kept clear because the metal clip covers it.
function drawHeader(ctx, rightLabel) {
  ctx.textBaseline = "alphabetic";
  ctx.font = `500 26px ${MONO}`;
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = "left";
  ctx.fillText("ATHARVA.DEV", PAD, 190);
  ctx.fillStyle = COLORS.dim;
  ctx.textAlign = "right";
  ctx.fillText(rightLabel, FACE_W - PAD, 190);
  ctx.textAlign = "left";
}

function drawFront(photo) {
  const { canvas, ctx } = createFace();
  drawHeader(ctx, "ID 2025-0624");

  const px = PAD;
  const py = 230;
  const pw = FACE_W - PAD * 2;
  const ph = 640;
  const scale = pw / photo.width;
  const sh = ph / scale;
  const sy = Math.min(photo.height * 0.04, photo.height - sh);

  ctx.save();
  roundedRect(ctx, px, py, pw, ph, 28);
  ctx.clip();
  ctx.drawImage(photo, 0, sy, photo.width, sh, px, py, pw, ph);
  const fade = ctx.createLinearGradient(0, py + ph * 0.7, 0, py + ph);
  fade.addColorStop(0, "rgba(11,11,13,0)");
  fade.addColorStop(1, "rgba(11,11,13,0.55)");
  ctx.fillStyle = fade;
  ctx.fillRect(px, py, pw, ph);
  ctx.restore();

  ctx.strokeStyle = COLORS.line;
  ctx.lineWidth = 2;
  roundedRect(ctx, px, py, pw, ph, 28);
  ctx.stroke();

  ctx.fillStyle = COLORS.text;
  ctx.font = `600 66px ${SANS}`;
  ctx.fillText("Atharva Dhumal", PAD, 975);

  ctx.fillStyle = COLORS.muted;
  ctx.font = `400 34px ${SANS}`;
  ctx.fillText("Full Stack & Mobile Developer", PAD, 1030);

  ctx.fillStyle = COLORS.line;
  ctx.fillRect(PAD, 1080, FACE_W - PAD * 2, 2);

  ctx.font = `500 26px ${MONO}`;
  ctx.fillStyle = COLORS.dim;
  ctx.fillText("COINCADE STUDIOS", PAD, 1145);

  ctx.textAlign = "right";
  ctx.fillStyle = COLORS.text;
  const status = "OPEN TO WORK";
  ctx.fillText(status, FACE_W - PAD, 1145);
  const statusW = ctx.measureText(status).width;
  ctx.fillStyle = COLORS.green;
  ctx.beginPath();
  ctx.arc(FACE_W - PAD - statusW - 22, 1136, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.textAlign = "left";

  return canvas.toDataURL("image/png");
}

function drawBack() {
  const { canvas, ctx } = createFace();
  drawHeader(ctx, "MUMBAI, IN");

  ctx.fillStyle = COLORS.text;
  ctx.font = `600 58px ${SANS}`;
  ctx.fillText("Stack", PAD, 320);

  const groups = [
    ["FRONTEND", "React · TypeScript · Next.js"],
    ["MOBILE & DESKTOP", "React Native · Expo · Electron"],
    ["BACKEND", "Node.js · Express · Prisma"],
    ["DATA & REALTIME", "PostgreSQL · Socket.IO · WebRTC"],
    ["PLATFORM", "Docker · GitHub Actions · Vercel"],
  ];

  let y = 410;
  for (const [label, items] of groups) {
    ctx.font = `500 22px ${MONO}`;
    ctx.fillStyle = COLORS.dim;
    ctx.fillText(label, PAD, y);
    ctx.font = `400 32px ${SANS}`;
    ctx.fillStyle = COLORS.muted;
    ctx.fillText(items, PAD, y + 46);
    y += 122;
  }

  ctx.fillStyle = COLORS.line;
  ctx.fillRect(PAD, 1020, FACE_W - PAD * 2, 2);

  ctx.font = `500 24px ${MONO}`;
  ctx.fillStyle = COLORS.text;
  ctx.fillText("github.com/atharvadhumal", PAD, 1075);

  // Decorative barcode
  let x = PAD;
  let seed = 7;
  const right = FACE_W - PAD;
  while (x < right) {
    seed = (seed * 9301 + 49297) % 233280;
    const w = 2 + Math.floor((seed / 233280) * 6);
    ctx.fillStyle = COLORS.text;
    ctx.fillRect(x, 1110, Math.min(w, right - x), 70);
    x += w + 3 + Math.floor((seed / 233280) * 5);
  }

  return canvas.toDataURL("image/png");
}

// Strap texture repeats and can render mirrored, so it uses a symmetric mark.
function drawStrap() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, 1024, 256);

  ctx.fillStyle = "#fafafa";
  ctx.font = `600 120px ${SANS}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("A", 512, 136);

  ctx.fillStyle = "#3f3f46";
  for (const cx of [312, 712]) {
    ctx.beginPath();
    ctx.arc(cx, 128, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas.toDataURL("image/png");
}

export async function createCardTextures() {
  await loadFonts();
  const photo = await loadImage(photoUrl);
  return {
    front: drawFront(photo),
    back: drawBack(),
    strap: drawStrap(),
  };
}
