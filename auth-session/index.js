'use strict';
import passport from 'passport';
import forEach from 'lodash.foreach';
import {pub,scoped} from './middleware';
import strats from './strats';
import {serializeUser,deserializeUser} from './configure-user';
import getRouteMaker from './routes';

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

const enableStrategy = (strategy) => ({ strats[strategy](); });

const fn= (appConfig, providerConfig, router) => ({
    forEach(appConfig, enableStrategy);
    const  mw = { data: pub(appConfig), scoped: scoped(appConfig, providerConfig),};
    const routeMaker = getRouteMaker(router);
    const res = routeMaker(appConfig, mw);
    return res;
});
export default fn;
