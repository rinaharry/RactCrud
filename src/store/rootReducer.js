import {combineReducers} from 'redux';
// import games from './component/game'
// import contact from './component/contact/contacteReduce'
import users from './reducer/UserReduce'
import auth from './reducer/loginReducer'
export default combineReducers({
    users,
    auth
})