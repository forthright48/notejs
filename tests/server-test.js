(function() {
  'use strict';

  const should = require('chai').should();
  const {
    dirname,
    server,
    app
  } = require('../server.js');

  describe('server.js', function() {
    before(function(done) {
      app.set('port', 1234);
      server.listen(app.get('port'), function(err) {
        done(err);
      });
    });


    it('should be running on port 4801', function() {
      app.get('port').should.equal(1234);
    });

    it('should be using pug as view engine', function() {
      app.get('view engine').should.equal('pug');
    });

    it('should be using view/views folder', function() {
      app.get('views').should.equal(`${dirname}/views`);
    });

    after(function(done) {
      server.close(done);
    });
  });
}());
