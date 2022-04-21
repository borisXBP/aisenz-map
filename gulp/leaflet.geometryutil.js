/** @format */

const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "geometryutil", // 交互绘制和编辑
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./borisPlugin/leaflet-geometryutil/src/leaflet.geometryutil.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);
