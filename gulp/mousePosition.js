const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "mousePosition-js", // 交互绘制和编辑
  gulp.series(function () {
    return gulp
      .src(["index.js", "./borisPlugin/Leaflet.MousePosition/dist/bundle.js"])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task("mousePosition", gulp.series("mousePosition-js"));
