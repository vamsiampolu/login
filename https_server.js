var readCerts = require('./read-cert');
var https = require('https');

function normalizePort(val) {
  'use strict';
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = function createServer(app) {
  'use strict';
  var port = normalizePort(process.env.PORT || 3000);
  app.set('port', port);
  var config = {
   keyName: 'key.pem',
   certName: 'cert.pem',
  };
  var basePath = '.';
  var certs = readCerts(basePath, config);

  var server = https.createServer(certs, app).listen(port);
  return server;
};
