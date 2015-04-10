import chai     from 'chai'
import es       from 'event-stream'
import modulizr from '../src'
import Lab      from 'lab'

const expect = chai.expect;

var lab      = Lab.script();
var describe = lab.describe;
var it       = lab.it;
export { lab };

var listTests = function(res) {

  var matches = res.match(/addTest\('(.*?)\)/g);

  var tests =
    matches.map(function(match) {
      return match.replace(/addTest\('(.*?)'.*/, '$1');
    })
    .reduce(function(prev, name) {
      return prev.add(name);
    }, new Set());

  return tests;
};

describe('building', function() {
  it('should generate the correct output', function(done) {
    modulizr(modulizr.all)
      .once('data', function(file) {
        var res = file.contents.toString();

        expect(res).to
          .be.a('string')
          .and.not.be.empty

        expect(listTests(res).size).to
          .be.above(10)

        done();
      });
  });

  it('should only generate the required tests', function(done) {
    modulizr({
      "classPrefix": "",
      "options": [
        "addTest",
        "atRule",
        "fnBind",
        "html5printshiv",
        "load",
        "prefixedCSS",
        "setClasses",
        "testProp"
      ],
      "feature-detects": [
        "test/canvas",
      ]
    })
      .once('data', function(file) {
        var res = file.contents.toString();
        var tests = listTests(res);

        expect(tests.size).to.equal(1)
        expect(tests.has('canvas')).to.be.true;

        done();
      });
  });
});
