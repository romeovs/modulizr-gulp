# modulizr-gulp

Simple modulizr builds for `gulp`.

## Usage
```js
var gulp     = require('gulp');
var modulizr = require('modulizr-gulp');
var opts     = modulizr.all;

opts.filename = 'modernizr.js';

gulp.task('modulizr', function() {
  return modulizr(opts)
   .pipe(gulp.dest('out/'));
});
```

## Options
Any options passed to `modulizr-gulp` will be passed
as build configuration options to
[`modernizr.build`](https://github.com/Modernizr/Modernizr#building).

Check `src/modulizr.json` for all available options.  These options
are also available as the `all` property on `modulizr-gulp`.

### `opts.filename`
This option defines the filename the eventual build file will have,
defaults to `modernizr.js`.

### License
This code is licensed under the [ISC license][license]

[license]:   ./LICENSE
