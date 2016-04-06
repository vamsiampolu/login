'use strict';
import User from '../../../models/user';
import {getVerifyCallback} from '../utils';

const createUser = ({id,displayName:name,emails:[{value:email}]}, token) => ({
  let user = new User();
  user.instagram = {id, name, email, token};
  return user.saveAsync();
});

const verifyCallback = getVerifyCallback('google.id',createUser);
export default verifyCallback;
