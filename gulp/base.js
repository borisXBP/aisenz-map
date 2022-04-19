const gulp = require("gulp");
const concat = require("gulp-concat");
const del = require("del");
const fs = require("fs");

gulp.task("setVersion", async () => {
  await fs.readFile("./version.js", (err, data) => {
    let res = data.toString();
    res = res
      .slice(0, res.lastIndexOf('"'))
      .replace('export const haVersion = "', "");
    res = res.replace(/\./g, "");
    res = String(parseInt(res) + 1);
    fs.writeFile(
      "./version.js",
      `export const haVersion = "${res.split("").join(".")}";`,
      () => {}
    );
  });
});

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
