(function() {
  'use strict';
  const express = require('express');
  const http = require('http');

  const app = express();
  const server = http.createServer(app);

  /*App*/
  app.set('port', process.env.PORT || 4801);
  app.set('view engine', 'pug');
  app.set('views', `${__dirname}/views`);


  /*Add routers*/
  require('./controllers/home.js').addRouter(app);

  if (require.main === module) {
    server.listen(app.get('port'), function() {
      console.log(`Server running at port ${ app.get('port') }`);
    });
  } else {
    module.exports = {
      dirname: __dirname,
      server,
      app
    };
  }
}());
