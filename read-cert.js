
var fs = require('fs');
var path = require('path');

module.exports = function readCert(basePath, options){
  'use strict';
  debugger;
  var defOptions = {
    keyName: 'key.pem',
    certName: 'cert.pem',
  };

  var defBasePath = '.';

  var defPaths = {
     key: path.join(defBasePath, defOptions.keyName),
     cert: path.join(defBasePath, defOptions.certName),
  };

  var paths;

  if(basePath) {
    paths = {
      key: path.join(basePath, options.keyName),
      cert: path.join(basePath, options.certName),
    };
  } else if(options) {
    paths = {
      key: path.join(defBasePath, options.keyName),
      cert: path.join(defBasePath, options.certName),
    };
  } else {
    paths = defPaths;
  }

  var certs = {
    key: fs.readFileSync(paths.key),
    cert: fs.readFileSync(paths.cert),
  };

  return certs;
};
