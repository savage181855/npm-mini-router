import path from "path";

import type { Config } from "./types";

export const joinPath = path.resolve;

const config: Config = {
  entry: "",
  srcPath: joinPath(__dirname, "../src"),
  distPath: joinPath(__dirname, "../miniprogram_dist"),
  demoSrc: joinPath(__dirname, '../demo'),
  demoDist: joinPath(__dirname, '../miniprogram_dev'),
  css: "wxss",
  minify: {
    css: true,
    jsAndTs: true,
    img: true,
  },
};

// console.debug(config);

export default config;
