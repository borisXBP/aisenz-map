/** @format */

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const requireDir = require('require-dir');
requireDir('./gulp/');

gulp.task(
	'leaflet-js',
	gulp.series(function () {
		return gulp
			.src(['./leaflet/leaflet.js'])
			.pipe(concat('index.js'))
			.pipe(gulp.dest('./'));
	}),
);

gulp.task(
	'leaflet-css',
	gulp.series(function () {
		return gulp
			.src(['./leaflet/leaflet.css'])
			.pipe(concat('index.css'))
			.pipe(gulp.dest('./'));
	}),
);

gulp.task(
	'handle-js',
	gulp.series(function () {
		return gulp.src(['index.js']).pipe(uglify()).pipe(gulp.dest('./'));
	}),
);

gulp.task(
	'handle-css',
	gulp.series(function () {
		return gulp.src(['index.css']).pipe(cleanCSS()).pipe(gulp.dest('./'));
	}),
);

const pluginList = ['leaflet_draw', 'MovingMarker'];

gulp.task(
	'all',
	gulp.series(
		'leaflet-js',
		'leaflet-css',
		...pluginList,
		'handle-js',
		'handle-css',
	),
);
