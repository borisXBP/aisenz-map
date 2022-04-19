const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "download-js", // 交互绘制和编辑
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./borisPlugin/leaflet.browser.print/dist/leaflet.browser.print.min.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "toImage-js",
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./borisPlugin/leaflet.browser.print-master/dom-to-image.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "download-css",
  gulp.series(function () {
    return gulp
      .src(["index.css", "./borisPlugin/boris_download/leaflet.download.css"])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "download-img",
  gulp.series(function () {
    return gulp
      .src(["./borisPlugin/boris_download/img/*"])
      .pipe(gulp.dest("./img/"));
  })
);

gulp.task(
  "boris-download",
  gulp.series("download-css", "download-img" /*  "download-js"  "toImage-js" */)
);
