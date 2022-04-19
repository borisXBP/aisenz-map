const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "fallBack-css",
  gulp.series(function () {
    return gulp
      .src(["index.css", "./borisPlugin/boris_fallBack/leaflet.fallBack.css"])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "fallBack-img",
  gulp.series(function () {
    return gulp
      .src(["./borisPlugin/boris_fallBack/img/*"])
      .pipe(gulp.dest("./img/"));
  })
);

gulp.task("boris-fallBack", gulp.series("fallBack-css", "fallBack-img"));
