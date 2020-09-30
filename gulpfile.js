const {src, dest, series, parallel, watch} = require('gulp');
/* PLUGINS */

const rename = require('gulp-rename');
const sassCompile = require('gulp-sass');
const minimizeCss = require('gulp-cssmin');
const concatCss = require('gulp-concat-css');

/* TASKS */
function CompileSass(){
  return src('css/*.scss')
    .pipe(sassCompile())
    .pipe(concatCss('./all.css'))
    .pipe(minimizeCss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('./'));
}
/* DEFAULT TASK */
exports.default = function(){
  watch('css/*.scss', CompileSass);
};
