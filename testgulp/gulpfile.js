/**
 * Created by Administrator on 2016/7/6.
 */
var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");

gulp.task("hello", function () {
    console.info("33333");
});

gulp.task("testAutoFx", function () {
    gulp.src('css/index.css')
        .pipe(autoprefixer({
        browsers:['Firefox <= 20','>5%']}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task("testimagemin", function () {
   gulp.src("img/*.{png,jpg,gif,ico}")
        .pipe(imagemin({
            optimization:5,
            progressive:true,
            interlaced:true,
            multipass:true
        }))
        .pipe(gulp.dest("dist/img"));
});

gulp.task("testuglify", function () {
   gulp.src("js/common.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("default",["hello"]);

