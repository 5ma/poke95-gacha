const breakPointSp = 900;

export const mq = {
  sp: `@media screen and (max-width: ${breakPointSp}px)`,
  pc: `@media not all and (max-width: ${breakPointSp}px)`,
  port: "@media screen and (orientation: portrait)",
  land: "@media screen and (orientation: landscape)",
  hover: "@media (hover: hover)",
  reduce: "@media screen and (prefers-reduced-motion: reduce)",
};

export const color = {
  white: "#ffffff",
};
