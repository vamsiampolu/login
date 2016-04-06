'use strict';
const getRouteRep = require('./get-route-info');
const reduce = require('lodash.reduce');
const createProviderRoutes = require('./route-for-provider');
module.exports = (router) => ({
  return  (providers, middleware) => ({
    var routeRep = getRouteRep(providers, middleware);
        reduce(routeRep, createProviderRoutes, router);
    });
});

