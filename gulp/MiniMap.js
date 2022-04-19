const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "MiniMap-js",
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./leaflet/plugins/Leaflet-MiniMap-master/dist/Control.MiniMap.min.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "MiniMap-images",
  gulp.series(function () {
    return gulp
      .src(["./leaflet/plugins/Leaflet-MiniMap-master/dist/images/*"])
      .pipe(gulp.dest("./images/"));
  })
);

gulp.task("MiniMap", gulp.series(/* "MiniMap-js", */ "MiniMap-images"));
