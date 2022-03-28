/** @format */

const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task(
	'move-js', // 交互绘制和编辑
	gulp.series(function () {
		return gulp
			.src([
				'index.js',
				'./leaflet/plugins/Leaflet.MovingMarker-master/MovingMarker.js',
			])
			.pipe(concat('index.js'))
			.pipe(gulp.dest('./'));
	}),
);

gulp.task(
	'move-css',
	gulp.series(function () {
		return gulp
			.src([
				'index.css',
				'./leaflet/plugins/Leaflet.MovingMarker-master/examples/style.css',
			])
			.pipe(concat('index.css'))
			.pipe(gulp.dest('./'));
	}),
);

gulp.task(
	'MovingMarker', // 交互绘制和编辑
	gulp.series('move-js', 'move-css'),
);
