'use strict';
import User from '../models/user';
const reject = require('bluebird').reject;
const returnUser = (user) => user; 
const rejectError = (err) =>  reject(err.errors); 

//this is also an anti-pattern when using ES6 modules, I would recommend
//exporting both functions individually rather than together because each function 
//can then be imported independently
const userman= {
    serializeUser(done, {id}) {
      return done(null, id);
    },
   
    deserializeUser(done, id) {
      return User.findByIdAsync(id)
	  .then(returnUser)
	  .catch(rejectError)
	  .nodeify(done, {spread: true});
   },
};
export default userman;
