'use strict';

export function handleError(err){
  console.error(err,'\n',err.stack);
}

export function findOrCreateUserGenerator(profile,token,createUser) {
  return function(user) {
    return user?[null,user]:createUser(profile,token);  
  }
}  

export function getVerifyCallback(path,createUser) {
  return function(accessToken,refreshToken,profile,done) {
     return User.findOneAsync({path:profile.id})
	      .then(findOrCreateUserGenerator(profile,accessToken,createUser)
	      .catch(handleError)
	      .nodeify(done,{spread:true});
			      
  }
}
