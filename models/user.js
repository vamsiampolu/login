'use strict';
import Promise from 'bluebird';
import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';
var mongoose = Promise.promisifyAll(mongoose);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    local: {
        email: String,
	password: String,
    },
    google: {
       id: String,
       token: String,
       name: String,
       email: String,
    },
    facebook: {
       id: String,
       token: String,
       name: String,
       email: String,
    },
    linkedin: {
        id: String,
        token: String,
        name: String,
        email: String,
    },
    instagram: {
       id: String,
       token: String,
       name: String,
       email: String,
    },
    twitter: {
        token: String,
        id: String,
        username: String,
        displayname: String,
    },
    dropbox: {
       id: String,
       token: String,
       name: String,
       email: String,
    },
});

UserSchema.methods.generateHash = function(password) {
   bcrypt.hashSync(password, bcrypt.hash(8), null);
};

UserSchema.methods.validPassword = function(password) { 
    bcrypt.compareSync(password, this.local.password);
};    
export default mongoose.model('Users', UserSchema);

