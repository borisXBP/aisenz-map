/** @format */

const gulp = require("gulp");
const requireDir = require("require-dir");
requireDir("./gulp/");

const pluginList = [
  "leaflet_draw",
  "MovingMarker",
  "NavBar",
  "measure",
  "fullScreen",
  "MiniMap",
  "boris-download",
  "boris-fallBack",
  "boris-dialog",
];

gulp.task("all", gulp.series("base", ...pluginList, "change-path"));
