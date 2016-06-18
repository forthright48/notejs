(function() {
  'use strict';

  const should = require('chai').should();
  const server = require('../server.js');

  describe('server.js', function() {
    before(function() {
      server.app.set('port', 1234);
      server.boot();
    });


    it('should be running on port 4801', function() {
      server.app.get('port').should.equal(1234);
    });

    it('should be using pug as view engine', function() {
      server.app.get('view engine').should.equal('pug');
    });

    after(function() {
      server.shutDown();
    });
  });
}());
