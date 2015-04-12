# gulp-modulizr
[![Build Status](https://img.shields.io/travis/romeovs/gulp-modulizr.svg?style=flat-square)][travis]
[![Coverage Status](https://img.shields.io/coveralls/romeovs/gulp-modulizr.svg?style=flat-square)][coveralls]
[![Dependencies](https://img.shields.io/david/romeovs/gulp-modulizr.svg?style=flat-square)][david]
[![devDependencies](https://img.shields.io/david/dev/romeovs/gulp-modulizr.svg?style=flat-square)][david-dev]
[![license](https://img.shields.io/badge/license-ISC-373737.svg?style=flat-square)][license]
[![gitter](https://img.shields.io/badge/GITTER-join%20chat%20→-00d86e.svg?style=flat-square)][gitter]

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

### License
This code is licensed under the [ISC license][license]

[travis]:    https://travis-ci.org/romeovs/gulp-modulizr
[coveralls]: https://coveralls.io/r/romeovs/gulp-modulizr?branch=master
[david]:     https://david-dm.org/romeovs/gulp-modulizr#info=dependencies
[david-dev]: https://david-dm.org/romeovs/gulp-modulizr#info=devDependencies
[gitter]:    https://gitter.im/romeovs/gulp-modulizr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[license]:   ./LICENSE
