const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const shell = require('gulp-shell');


gulp.task('sass', () =>{
  //targets any folder inside the src/scss that has scss files
  //targets any folder inside the src/scss that has scss files
  return gulp.src('./src/scss/**/*.scss')
  //displays any error in console log
  .pipe(sass().on('error', sass.logError))
  //automatically adds the autoprefixer to converted css
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./public/css'))
});

gulp.task('webpack', () => {
  return gulp.src('*.js', {read: false})
  .pipe(shell([
    'webpack'
  ]))
})

gulp.task('sass:minify', () => {
  //targets any folder inside the src/scss that has scss files
  return gulp.src('./public/css/*.css')
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/css'));
  });


//defaults to first task (sass) and adds a function
gulp.task('default', ['sass', 'webpack'], () => {
  //watchest the SCSS folder for any changes and runs the 'sass' task on any changes-- resulting in automatic css conversion.
  gulp.watch('./src/scss/**/*', ['sass'])
  gulp.watch('./src/js/**/*', ['webpack'])
});

gulp.task('production', ['sass:minify'])