'use strict';
import User from '../../../models/user';
import {handleError, findOrCreateUserGenerator} from '../utils';

const createUser = ({id, username, displayName:name}, token) => ({
  let user = new User();
  user.twitter = { token, id, username, name,};
  return user;
});
//this is the verify callback
export default function verifyCallback(token, tokenSecret, profile, done){
  return User.findOneAsync({'twitter.id': profile.id})
       .then(findOrCreateGenerator(profile, token, createUser))
       .catch(handleError)
       .nodeify(done, {spread: true});
};

