'use strict';
import reduce from 'lodash.reduce';
import getCallback from './get-callback';
import getMiddleware from './get-middleware';
import passport from 'passport';

const getLocalMiddleware = (result, name) => ({
  result['local-register'] = getMiddleware('local-register', getCallback);
  result['local-login'] = getMiddleware('local-login', getCallback);
});

const pub = (strategies) => ({
  const onEachStrategy = (result, name) => ({
    if(name === 'local') {
     getLocalMiddleware(result, name);
   } else {
       result[name] = getMiddleware(name, getCallback);
   }
   return result;
  });
  const preparedStrategies = reduce(strategies, onEachStrategy, {});
  return preparedStrategies;
});

const scoped = (strategies, config) => ({
 const onEachStrategy(result, name) => ({
   if(name && config[name]) {
      result[name] = config[name].scope?
	passport.authenticate(name,config[name].scope):
	passport.authenticate(name);
    }
    return result;
  });
  const result = reduce(strategies, onEachStrategy, {});
  return result;
});

export {pub,scoped} as default;
export pub,scoped;
