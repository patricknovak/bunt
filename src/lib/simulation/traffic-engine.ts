export interface Vehicle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  color: string;
  lane: number;
  direction: "N" | "S" | "E" | "W";
  waiting: boolean;
}

export interface IntersectionConfig {
  width: number;
  height: number;
  roadWidth: number;
  mainStreetLanes: number;
  sideStreetLanes: number;
  mainStreetVolume: number;
  sideStreetVolume: number;
  signalState: "green-main" | "green-side" | "yellow" | "all-red";
  signalTimer: number;
  greenTimeMain: number;
  greenTimeSide: number;
}

const VEHICLE_COLORS = [
  "#0f4c75",
  "#3282b8",
  "#1b998b",
  "#e8630a",
  "#6c5ce7",
  "#2d3436",
  "#d63031",
  "#00b894",
];

export function createDefaultConfig(): IntersectionConfig {
  return {
    width: 800,
    height: 600,
    roadWidth: 60,
    mainStreetLanes: 2,
    sideStreetLanes: 2,
    mainStreetVolume: 500,
    sideStreetVolume: 200,
    signalState: "green-main",
    signalTimer: 0,
    greenTimeMain: 30,
    greenTimeSide: 20,
  };
}

export function createVehicle(
  config: IntersectionConfig,
  direction: "N" | "S" | "E" | "W"
): Vehicle {
  const cx = config.width / 2;
  const cy = config.height / 2;
  const laneOffset = 15;
  const speed = 1 + Math.random() * 2;

  const color =
    VEHICLE_COLORS[Math.floor(Math.random() * VEHICLE_COLORS.length)];

  switch (direction) {
    case "E":
      return {
        x: -20,
        y: cy + laneOffset,
        vx: speed,
        vy: 0,
        speed,
        color,
        lane: 0,
        direction,
        waiting: false,
      };
    case "W":
      return {
        x: config.width + 20,
        y: cy - laneOffset,
        vx: -speed,
        vy: 0,
        speed,
        color,
        lane: 1,
        direction,
        waiting: false,
      };
    case "S":
      return {
        x: cx + laneOffset,
        y: -20,
        vx: 0,
        vy: speed,
        speed,
        color,
        lane: 2,
        direction,
        waiting: false,
      };
    case "N":
      return {
        x: cx - laneOffset,
        y: config.height + 20,
        vx: 0,
        vy: -speed,
        speed,
        color,
        lane: 3,
        direction,
        waiting: false,
      };
  }
}

export function updateSignal(config: IntersectionConfig): IntersectionConfig {
  const newConfig = { ...config };
  newConfig.signalTimer++;

  const totalCycle = config.greenTimeMain + config.greenTimeSide + 8; // +8 for yellows and all-reds

  const phase = newConfig.signalTimer % totalCycle;

  if (phase < config.greenTimeMain) {
    newConfig.signalState = "green-main";
  } else if (phase < config.greenTimeMain + 3) {
    newConfig.signalState = "yellow";
  } else if (phase < config.greenTimeMain + 5) {
    newConfig.signalState = "all-red";
  } else if (phase < config.greenTimeMain + 5 + config.greenTimeSide) {
    newConfig.signalState = "green-side";
  } else if (phase < config.greenTimeMain + 8 + config.greenTimeSide) {
    newConfig.signalState = "yellow";
  } else {
    newConfig.signalState = "all-red";
  }

  return newConfig;
}

export function shouldStop(
  vehicle: Vehicle,
  config: IntersectionConfig
): boolean {
  const cx = config.width / 2;
  const cy = config.height / 2;
  const stopLine = config.roadWidth / 2 + 10;

  const isMainStreet =
    vehicle.direction === "E" || vehicle.direction === "W";
  const isSideStreet =
    vehicle.direction === "N" || vehicle.direction === "S";

  if (
    isMainStreet &&
    (config.signalState === "green-side" || config.signalState === "all-red")
  ) {
    if (vehicle.direction === "E" && vehicle.x > cx - stopLine - 20 && vehicle.x < cx - stopLine)
      return true;
    if (vehicle.direction === "W" && vehicle.x < cx + stopLine + 20 && vehicle.x > cx + stopLine)
      return true;
  }

  if (
    isSideStreet &&
    (config.signalState === "green-main" || config.signalState === "all-red")
  ) {
    if (vehicle.direction === "S" && vehicle.y > cy - stopLine - 20 && vehicle.y < cy - stopLine)
      return true;
    if (vehicle.direction === "N" && vehicle.y < cy + stopLine + 20 && vehicle.y > cy + stopLine)
      return true;
  }

  return false;
}

export function drawIntersection(
  ctx: CanvasRenderingContext2D,
  config: IntersectionConfig,
  vehicles: Vehicle[]
) {
  const { width, height, roadWidth } = config;
  const cx = width / 2;
  const cy = height / 2;

  // Clear
  ctx.fillStyle = "#f0f4f0";
  ctx.fillRect(0, 0, width, height);

  // Roads
  ctx.fillStyle = "#555";
  // Horizontal
  ctx.fillRect(0, cy - roadWidth, width, roadWidth * 2);
  // Vertical
  ctx.fillRect(cx - roadWidth, 0, roadWidth * 2, height);

  // Center-line dashes
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;

  // Horizontal center line
  ctx.beginPath();
  ctx.moveTo(0, cy);
  ctx.lineTo(cx - roadWidth, cy);
  ctx.moveTo(cx + roadWidth, cy);
  ctx.lineTo(width, cy);
  ctx.stroke();

  // Vertical center line
  ctx.beginPath();
  ctx.moveTo(cx, 0);
  ctx.lineTo(cx, cy - roadWidth);
  ctx.moveTo(cx, cy + roadWidth);
  ctx.lineTo(cx, height);
  ctx.stroke();

  ctx.setLineDash([]);

  // Stop lines
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 3;

  // East approach
  ctx.beginPath();
  ctx.moveTo(cx - roadWidth - 5, cy);
  ctx.lineTo(cx - roadWidth - 5, cy + roadWidth);
  ctx.stroke();

  // West approach
  ctx.beginPath();
  ctx.moveTo(cx + roadWidth + 5, cy - roadWidth);
  ctx.lineTo(cx + roadWidth + 5, cy);
  ctx.stroke();

  // South approach
  ctx.beginPath();
  ctx.moveTo(cx, cy - roadWidth - 5);
  ctx.lineTo(cx + roadWidth, cy - roadWidth - 5);
  ctx.stroke();

  // North approach
  ctx.beginPath();
  ctx.moveTo(cx - roadWidth, cy + roadWidth + 5);
  ctx.lineTo(cx, cy + roadWidth + 5);
  ctx.stroke();

  // Crosswalks
  ctx.fillStyle = "#fff";
  for (let i = 0; i < 6; i++) {
    const offset = -roadWidth + i * (roadWidth * 2) / 6 + 5;
    // North crosswalk
    ctx.fillRect(cx + offset, cy - roadWidth - 15, 10, 10);
    // South crosswalk
    ctx.fillRect(cx + offset, cy + roadWidth + 5, 10, 10);
    // East crosswalk
    ctx.fillRect(cx + roadWidth + 5, cy + offset, 10, 10);
    // West crosswalk
    ctx.fillRect(cx - roadWidth - 15, cy + offset, 10, 10);
  }

  // Signal lights
  const signalSize = 12;
  // Main street signals
  const mainColor =
    config.signalState === "green-main"
      ? "#00ff00"
      : config.signalState === "yellow"
      ? "#ffff00"
      : "#ff0000";
  const sideColor =
    config.signalState === "green-side"
      ? "#00ff00"
      : config.signalState === "yellow"
      ? "#ffff00"
      : "#ff0000";

  // East signal
  ctx.fillStyle = mainColor;
  ctx.beginPath();
  ctx.arc(cx - roadWidth - 20, cy + roadWidth + 15, signalSize / 2, 0, Math.PI * 2);
  ctx.fill();

  // West signal
  ctx.fillStyle = mainColor;
  ctx.beginPath();
  ctx.arc(cx + roadWidth + 20, cy - roadWidth - 15, signalSize / 2, 0, Math.PI * 2);
  ctx.fill();

  // South signal
  ctx.fillStyle = sideColor;
  ctx.beginPath();
  ctx.arc(cx + roadWidth + 15, cy - roadWidth - 20, signalSize / 2, 0, Math.PI * 2);
  ctx.fill();

  // North signal
  ctx.fillStyle = sideColor;
  ctx.beginPath();
  ctx.arc(cx - roadWidth - 15, cy + roadWidth + 20, signalSize / 2, 0, Math.PI * 2);
  ctx.fill();

  // Draw vehicles
  vehicles.forEach((v) => {
    ctx.fillStyle = v.color;
    ctx.beginPath();

    if (v.direction === "E" || v.direction === "W") {
      // Horizontal vehicle (rectangle)
      ctx.roundRect(v.x - 10, v.y - 5, 20, 10, 3);
    } else {
      // Vertical vehicle (rectangle)
      ctx.roundRect(v.x - 5, v.y - 10, 10, 20, 3);
    }
    ctx.fill();
  });

  // Direction labels
  ctx.fillStyle = "#999";
  ctx.font = "12px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("N", cx, 15);
  ctx.fillText("S", cx, height - 5);
  ctx.fillText("E", width - 10, cy);
  ctx.fillText("W", 10, cy);
}
