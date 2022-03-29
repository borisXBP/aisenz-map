/** @format */

const gulp = require("gulp");
const requireDir = require("require-dir");
requireDir("./gulp/");

const pluginList = [
  "leaflet_draw",
  "MovingMarker",
  "NavBar",
  "MiniMap",
  "fullScreen",
  "measure",
  "download",
];

gulp.task("all", gulp.series("base", ...pluginList, "change-path"));
