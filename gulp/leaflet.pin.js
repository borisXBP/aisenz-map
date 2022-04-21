const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "pin-js",
  gulp.series(function () {
    return gulp
      .src(["index.js", "./borisPlugin/Leaflet.Pin/dist/leaflet.pin.js"])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "pin-css",
  gulp.series(function () {
    return gulp
      .src(["index.css", "./borisPlugin/Leaflet.Pin/dist/leaflet.pin.css"])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "pin-images",
  gulp.series(function () {
    return gulp
      .src(["./borisPlugin/Leaflet.Pin/dist/images/*.png"])
      .pipe(gulp.dest("./img/"));
  })
);

gulp.task("pin", gulp.series("pin-js", "pin-css", "pin-images"));
