'use strict';
import User from '../../../models/user';
import {getVerifyCallback} from '../utils';

const createUser = ({id,displayName:name,emails:[{value:email}]}, token) => ({
    let user = new User();
    user.linkedin = {id, name, token, email};
    return user.saveAsync();
});

const verifyCallback = getVerifyCallback('linkedin.id',createUser);
export default verifyCallback;
