(function() {
  'use strict';

  const express = require('express');

  const router = express.Router();

  router.get('/', getHome);

  module.exports = {
    addRouter(app) {
      app.use('/', router);
    }
  };

  /*******************************************
  Implementation
  *******************************************/

  function getHome(req, res) {
    res.send('OK');
  }
}());
