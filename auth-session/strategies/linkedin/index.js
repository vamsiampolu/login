import verifyCallback from './verifyCallback';
import {Strategy} from 'passport-linkedin-oauth2';
import {linkedin} from '../../credentials.json';
const preparedStrategy = new Strategy(linkedin, verifyCallback);
export default preparedStrategy;

