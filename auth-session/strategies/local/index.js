//this module is an anti-pattern when using ES6 Modules, there is no need to
//aggregate the exports of two different modules. just import directly from
//the modules instead
import login from './login';
import register from './register';
const res = { register, login };
export default res;
