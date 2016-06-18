(function() {
  'use strict';

  const should = require('chai').should();
  const server = require('../../server.js');
  const request = require('superagent');
  const baseurl = 'http://localhost:1234';

  describe('controller/home.js', function() {
    before(function() {
      server.app.set('port', 1234);
      server.boot();
    });

    describe('getHome()', function() {
      it('should provide route for /', function(done) {
        request
          .get(`${baseurl}/`)
          .end(function(err, res) {
            if (err) done(err);
            res.ok.should.be.true;
            done();
          });
      });
    });

    after(function() {
      server.shutDown();
    });
  });
}());
