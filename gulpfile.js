const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean');

gulp.task('sass', function (){
  //targets any folder inside the src/scss that has scss files
  return gulp.src('./src/scss/**/*.scss')
  //displays any error in console log
  .pipe(sass().on('error', sass.logError))

  //automatically adds the autoprefixer to converted css
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))

  //converts all the folder files to css
  .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:minify', () => {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logerror))
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(cleanCSS({compatability: 'ie8'}))
  .pipe(gulp.dest('./public/css'))
})

gulp.task('production', ['sass:minify'])


//defaults to first task (sass) and adds a function
gulp.task('default', ['sass'], function(){
  //watchest the SCSS folder for any changes and runs the 'sass' task on any changes-- resulting in automatic css conversion.
  gulp.watch('./src/scss/**/*', ['sass'])
});