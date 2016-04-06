'use strict';
import User from '../../../models/user';
import {getVerifyCallback} from utils;

const createUser = ({id,displayName:name,emails:[{value:email}]},token) => ({
    let user = new User();
    user.dropbox = { id, token, name, email};
    return user.saveAsync();
});

const verifyCallback = getVerifyCallback('dropbox.id',createUser);
export default verifyCallback;
