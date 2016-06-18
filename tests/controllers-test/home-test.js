(function() {
  'use strict';

  const should = require('chai').should();
  const {
    server,
    app
  } = require('../../server.js');
  const cheerio = require('cheerio');
  const request = require('superagent');
  const baseurl = 'http://localhost:1234';

  describe('controller/home.js', function() {
    before(function(done) {
      app.set('port', 1234);
      server.listen(app.get('port'), function(err) {
        done(err);
      });
    });

    describe('getHome()', function() {
      let response;
      before(function(done) {
        request
          .get(`${baseurl}/`)
          .end(function(err, res) {
            if (err) done(err);
            response = res;
            done();
          });
      });

      it('should provide route for /', function() {
        response.ok.should.be.true;
      });

      it('should return html response', function() {
        response.header['content-type'].should.equal('text/html; charset=utf-8');
      });

      it('should have title notejs', function() {
        const $ = cheerio.load(response.text);
        $('title').text().should.be.equal('noteJS');
      });
    });

    after(function(done) {
      server.close(done);
    });
  });
}());
