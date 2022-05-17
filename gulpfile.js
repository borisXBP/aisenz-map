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
  "pin",
  "geometryutil",
  /*   "mousePosition", */
];
// 地图中的容器对应的插件名称是： Leaflet.Dialog

gulp.task("all", gulp.series("base", ...pluginList, "change-path"));
