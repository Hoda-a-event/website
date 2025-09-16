// Theme configuration for BONK brand
export const theme = {
  colors: {
    bonkOrange: "#FF5C01",
    bonkYellow: "#FFD302",
    bonkWhite: "#FDFFF7",
    bonkNavy: "#2B3649",
    bonkBlack: "#000205",
    bonkRed: "#FF0000",
    bonkMaroon: "#800000",
  },
  gradients: {
    orange: "linear-gradient(90deg, #FFD302 0%, #FF5C01 100%)",
    dark: "linear-gradient(90deg, #2B3649 0%, #000205 100%)",
    red: "linear-gradient(90deg, #FF0000 0%, #800000 100%)",
  },
  fonts: {
    header: ["Herborn", "sans-serif"],
    body: ["Helvetica", "Arial", "sans-serif"],
  },
  borderRadius: {
    bonkBtn: "20%",
  },
  letterSpacing: {
    bonk: "0.05em",
  },
};

export const communities = [
  {
    id: "bonk",
    name: "BONK",
    description: "The dog coin of the people",
    color: theme.colors.bonkOrange,
    stickerCount: 15,
  },
  {
    id: "ssx",
    name: "SSX",
    description: "Community driven",
    color: theme.colors.bonkNavy,
    stickerCount: 12,
  },
  {
    id: "unstable",
    name: "Unstable State Dollar",
    description: "Stability in chaos",
    color: theme.colors.bonkRed,
    stickerCount: 10,
  },
  {
    id: "useless",
    name: "Useless Coin",
    description: "Purposefully useless",
    color: theme.colors.bonkYellow,
    stickerCount: 8,
  },
] as const;

export const baseAvatars = [
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
  "/avatars/avatar-4.png",
  "/avatars/avatar-5.png",
  "/avatars/avatar-6.png",
];

export const exportSizes = [
  { label: "512x512", value: 512 },
  { label: "1024x1024", value: 1024 },
  { label: "2048x2048", value: 2048 },
];

export const exportFormats = [
  { label: "PNG (Transparent)", value: "png", transparent: true },
  { label: "PNG (Solid)", value: "png", transparent: false },
  { label: "JPEG", value: "jpeg", transparent: false },
];
