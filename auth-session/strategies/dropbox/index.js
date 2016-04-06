import verifyCallback from './verifyCallback';
import {Strategy} from 'passport-dropbox-oauth2';
import {dropbox} from '../../credentials.json';
const preparedStrategy = new Strategy(dropbox, verifyCallback);
export default preparedStrategy;
