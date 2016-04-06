'use strict';
import User from '../../../models/user';
import {getVerifyCallback} from '../utils';  

const createUser ({id,givenName,lastName,emails:[{value:email}]}, token) => ({
    const name = givenName + ' ' + lastName;	
    let user = new User();
    user.facebook = { id, token, name, email,};
    return user.saveAsync();
});

const verifyCallback = getVerifyCallback('facebook.id',createUser);
export default verifyCallback;
