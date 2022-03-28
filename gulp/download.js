const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "download-js", // 交互绘制和编辑
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./leaflet/plugins/leaflet.browser.print-master/leaflet.browser.print.min.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "toImage-js", // 交互绘制和编辑
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./leaflet/plugins/leaflet.browser.print-master/dom-to-image.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "download", // 交互绘制和编辑
  gulp.series("download-js", "toImage-js")
);
