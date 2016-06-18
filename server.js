(function() {
  'use strict';
  const express = require('express');
  const http = require('http');

  const app = express();
  const server = http.createServer(app);

  /*App*/
  app.set('port', process.env.PORT || 4801);
  app.set('view engine', 'pug');


  /*Add routers*/
  require('./controller/home.js').addRouter(app);

  function boot(print) {
    server.listen(app.get('port'), function() {
      if (print) console.log(`Server running at port ${ app.get('port') }`);
    });
  }

  function shutDown() {
    server.close();
  }

  if (require.main === module) {
    boot(1);
  } else {
    module.exports = {
      boot,
      shutDown,
      app
    };
  }
}());
