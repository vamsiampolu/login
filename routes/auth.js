var express = require('express');
var configAuth = require('../auth-session');
var providerConfig = require('../provider-config.json');
var providers = [
  'local',
  'google',
  'twitter',
  'facebook',
  'twitter',
  'dropbox',
  'linkedin',
];

var router = express.Router();
router.get('/', function(req, res) {
    'use strict';
    res.send('respond with a resource');
  });

configAuth(providers, providerConfig, router);
module.exports = router;
