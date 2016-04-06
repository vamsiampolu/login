'use strict';
import passport from 'passport';
const ex =  {
  local() {
    const {login, register}= require('./strategies/local');
    passport.use('local-register', register);
    passport.use('local-login', login);
  },

  google() {
    const google = require('./strategies/google');
    passport.use('google-login', google);
  },

  facebook() {
    const facebook = require('./strategies/facebook');
    passport.use('facebook-login', facebook);
  },

  linkedin(){
    const linkedin = require('./strategies/linkedin');
    passport.use('linkedin-login', linkedin);
  },
  instagram(){
    const instagram = require('./strategies/instagram');
    passport.use('instagram-login', instagram);
  },
  twitter(){
    const twitter = require('./strategies/twitter');
    passport.use('twitter-login', twitter);
  },

  dropbox() {
    const dropbox = require('./strategies/dropbox');
    passport.use('login-dropbox', dropbox);
  }
};
export default ex;
