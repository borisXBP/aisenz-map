const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "dialog-js",
  gulp.series(function () {
    return gulp
      .src(["index.js", "./borisPlugin/Leaflet.Dialog/Leaflet.Dialog.js"])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "dialog-css",
  gulp.series(function () {
    return gulp
      .src(["index.css", "./borisPlugin/Leaflet.Dialog/Leaflet.Dialog.css"])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task("boris-dialog", gulp.series("dialog-css", "dialog-js"));
