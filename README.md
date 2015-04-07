# gulp-modulizr

Simple modulizr builds for `gulp`.

## Usage
```js
var gulp     = require('gulp');
var modulizr = require('gulp-modulizr');
var opts     = modulizr.all;
gulp.task('modulizr', function() {
  return modulizr(opts)
   .pipe(gulp.dest('out/modernizr.js'));
});
```

## Options
Any options passed to `gulp-modulizr` will be passed
as build configuration options to
[`modernizr.build`](https://github.com/Modernizr/Modernizr#building).

Check `src/modulizr.json` for all available options.  These options
are also available as the `modulizr.all` property.
