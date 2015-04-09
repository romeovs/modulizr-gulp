# gulp-modulizr

[![Build Status](https://travis-ci.org/romeovs/gulp-modulizr.svg)](https://travis-ci.org/romeovs/gulp-modulizr)
[![Coverage Status](https://coveralls.io/repos/romeovs/gulp-modulizr/badge.svg?branch=master)](https://coveralls.io/r/romeovs/gulp-modulizr?branch=master)
[![Dependencies](https://david-dm.org/romeovs/gulp-modulizr.svg)](https://david-dm.org/romeovs/gulp-modulizr)

Simple modulizr builds for `gulp`.

## Usage
```js
var gulp     = require('gulp');
var modulizr = require('gulp-modulizr');
var opts     = modulizr.all;

opts.filename = 'modernizr.js';

gulp.task('modulizr', function() {
  return modulizr(opts)
   .pipe(gulp.dest('out/'));
});
```

## Options
Any options passed to `gulp-modulizr` will be passed
as build configuration options to
[`modernizr.build`](https://github.com/Modernizr/Modernizr#building).

Check `src/modulizr.json` for all available options.  These options
are also available as the `all` property on `gulp-modulizr`.

### `opts.filename`
This option defines the filename the eventual build file will have,
defaults to `modernizr.js`.

