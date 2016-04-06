import {Strategy:LocalStrategy} from 'passport-local';
import verifyCallback from './verifyCallback';
const config= {usernameField: 'email',passwordField: 'password',};
const preparedStrategy = new LocalStrategy(config, verifyCallback);
export default preparedStrategy;
