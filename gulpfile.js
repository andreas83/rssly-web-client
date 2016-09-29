var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concatCss   = require('gulp-concat-css');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/src/template/*.hbs", ['templates']);
    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/src/**/*.js", ['js']);
    gulp.watch("app/index.html").on('change', browserSync.reload);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task("js", function () {
  return gulp.src([ "app/src/**/*.js"])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.stream());
});

gulp.task('templates', function(){
  gulp.src('app/src/template/*.hbs')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'rssly.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('app/js/'))
    .pipe(browserSync.stream());
});



gulp.task('default', ['serve']);
