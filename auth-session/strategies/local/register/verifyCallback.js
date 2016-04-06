'use strict';
import User from '../../../../models/user';

const createUser = (uname, pwd) => ({
    var user = new User();
    user.local = { email: uname, password: user.generateHash(pwd),};
    return user.saveAsync();
});

const getFindOrCreateUser = (uname, pwd) => user ({
    return user?[null,false,{message:'A user with the same email address already exists'}]:createUser(user);
});

//this is the verify callback
const verifyCallback = (uname, pwd, done) => {
    return User.findOneAsync({'local.email': uname})
	.then(getFindOrCreateUser(uname, pwd))
	.catch(utils.handleError)
	.nodeify(done, {spread: true});
};

export verifyCallback as default;
