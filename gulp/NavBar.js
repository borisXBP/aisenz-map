/** @format */
const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "navbar-js", // 交互绘制和编辑
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./leaflet/plugins/Leaflet.NavBar-1.0.1/src/Leaflet.NavBar.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "navbar-css",
  gulp.series(function () {
    return gulp
      .src([
        "index.css",
        "./leaflet/plugins/Leaflet.NavBar-1.0.1/src/Leaflet.NavBar.css",
      ])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "navbar-images",
  gulp.series(function () {
    return gulp
      .src(["./leaflet/plugins/Leaflet.NavBar-1.0.1/src/img/*"])
      .pipe(gulp.dest("./img/"));
  })
);

gulp.task("NavBar", gulp.series("navbar-js", "navbar-css", "navbar-images"));
