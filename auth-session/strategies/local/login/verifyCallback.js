'use strict';
import User from from '../../../../models/user;
import {handleError} from '../../utils';

const generateGetUser = password => user => ({
  if(user != null) {
    if(!user.validPassword(password)) {
       return [null, false, message: {'Incorrect username and/or password'}];
    } else {
       return [null,user];
    } else {
      return [null,false,{message:'User could not be found'}];
    } 	    
  }
}); 

 const verifyCallback = (uname, password, done) => ({
    return User.findOneAsync({'local.email': uname})
	.then(generateGetUser(password))
	.catch(handleError)
	.nodeify(done, {spread: true});
});
export default verifyCallback;
