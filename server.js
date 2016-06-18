(function() {
  'use strict';
  const express = require('express');
  const http = require('http');

  const app = express();
  const server = http.createServer(app);

  /*App*/
  app.set('port', process.env.PORT || 4801);

  function boot() {
    server.listen(app.get('port'), function() {
      console.log(`Server running at port ${ app.get('port') }`);
    });
  }

  function shutDown() {
    server.close();
  }

  if (require.main === module) {
    boot();
  } else {
    module.exports = {
      boot,
      shutDown,
      app
    };
  }
}());
