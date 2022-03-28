const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "measure-js",
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./leaflet/plugins/leaflet-measure-master/src/leaflet-measure.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "measure-css",
  gulp.series(function () {
    return gulp
      .src([
        "index.css",
        "./leaflet/plugins/leaflet-measure-master/src/leaflet-measure.css",
      ])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "measure-images",
  gulp.series(function () {
    return gulp
      .src(["./leaflet/plugins/leaflet-measure-master/assets/*.png"])
      .pipe(gulp.dest("./lib/img/"));
  })
);

gulp.task(
  "measure",
  gulp.series("measure-js", "measure-css", "measure-images")
);
