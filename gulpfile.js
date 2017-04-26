
    var gulp = require('gulp'),
        minifycss = require('gulp-minify-css');
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename')

    console.log('start ...');

    gulp.task('hcss',function(){
             gulp.src(['static/css/common/common.css','static/css/index.css'])
            .pipe(concat('index.css'))
            //.pipe(rename({suffix:'.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest('static/release/css'));
      });



    gulp.task('hjs',function(){
        gulp.src(['static/js/common/jquery.js','static/js/index.js'])
            .pipe(concat('index.js'))
            //.pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('static/release/js'));
    });


    gulp.task('default',['hcss','hjs']);
