import verifyCallback from './verifyCallback'; 
import {Strategy} from 'passport-facebook';
import {facebook} from '../../credentials.json';
import verifyCallback from'./verifyCallback';
const preparedStrategy = new Strategy(facebook, verifyCallback);
export default preparedStrategy;
