import verifyCallback from './verifyCallback';
import {Strategy} from 'passport-instagram';
import {instagram} from '../../credentials.json';
const preparedStrategy = new Strategy(instagram, verifyCallback);
export default preparedStrategy;
