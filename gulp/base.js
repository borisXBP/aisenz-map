const gulp = require("gulp");
const concat = require("gulp-concat");
const del = require("del");

gulp.task(
  "clean",
  gulp.series(() =>
    del(["./index.js", "./index.css", "./images", "./img", "./lib"])
  )
);

gulp.task(
  "leaflet-js",
  gulp.series(function () {
    return gulp
      .src(["./leaflet/leaflet.js"])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "leaflet-css",
  gulp.series(function () {
    return gulp
      .src(["./leaflet/leaflet.css"])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task("base", gulp.series("clean", "leaflet-js", "leaflet-css"));
