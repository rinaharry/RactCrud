//import { SET_GAMES, ADD_GAME } from "./action";
  import {GET_USER, ADD_USER} from "../action/userAction"
 
  export default function users(state=[],action= {}) {
    switch (action.type) {
        case GET_USER:
          return action.users
          case ADD_USER:{
              return  [...state , action.user]
          } 
        default:
            return state;
    }
}