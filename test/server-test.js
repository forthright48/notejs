(function() {
  'use strict';

  const should = require('chai').should();
  const server = require('../server.js');

  describe('server.js', function() {
    before(function() {
      server.boot();
    });


    it('should be running on port 4801', function() {
      server.app.get('port').should.equal(4801);
    });

    after(function() {
      server.shutDown();
    });
  });
}());
