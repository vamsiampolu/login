import verifyCallback from './verifyCallback';
import {Strategy} from 'passport-twitter';
import  {twitter} from '../../credentials.json';
const  preparedStrategy = new Strategy(twitter, verifyCallback);
export default preparedStrategy;

