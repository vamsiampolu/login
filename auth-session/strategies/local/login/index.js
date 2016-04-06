import verifyCallback from './verifyCallback';
import {Strategy:LocalStrategy} from 'passport-local').Strategy;
const config = {usernameField: 'email',passwordField: 'password',};
const preparedStrategy = new LocalStrategy(config , verifyCallback);
export default preparedStrategy;
