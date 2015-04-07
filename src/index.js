import modernizr from 'modernizr'
import gutil     from 'gulp-util'
import es        from 'event-stream'

var modulizr =function(config) {
  // extract filename
  var filename = config.filename || 'modernizr.js';
  delete config.filename;

  var building = false;
  return es.readable(function(ct, callback) {
    if ( !building ) {
      building = true;
      modernizr.build(config, function (result) {
        this.emit('data', new gutil.File({
          cwd      : ''
        , base     : ''
        , path     : filename
        , contents : new Buffer(result)
        }));
        this.emit('end')
        callback();
      }.bind(this));
    }
  });
};

modulizr.all = require('./modulizr.json');

export default modulizr;
