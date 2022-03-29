const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "draw-js", // 交互绘制和编辑
  gulp.series(function () {
    return gulp
      .src(["index.js", "./leaflet/plugins/leaflet_draw/leaflet.draw.js"])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "draw-css",
  gulp.series(function () {
    return gulp
      .src(["index.css", "./leaflet/plugins/leaflet_draw/leaflet.draw.css"])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "draw-images",
  gulp.series(function () {
    return gulp
      .src(["./leaflet/plugins/leaflet_draw/images/*"])
      .pipe(gulp.dest("./images/"));
  })
);

gulp.task(
  "leaflet_draw", // 交互绘制和编辑
  gulp.series("draw-js", "draw-css", "draw-images")
);
