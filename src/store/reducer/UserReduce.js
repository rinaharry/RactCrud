//import { SET_GAMES, ADD_GAME } from "./action";

  import {GET_USER, ADD_USER,USER_ERROR } from "../action/userAction"
  const initialiseState = {
    users:[],
    error:null

  }
  export default function users(state=initialiseState,action) {
    switch (action.type) {
        case GET_USER:

          return {
            ...state,
            users: action.users,
            error : null
          }
          case ADD_USER: {
              return  {
                ...state ,
               users: [...state.users, action.user],
               error:null
              }
          } 
          case USER_ERROR: {
            return {
              ...state,
              error: action.error
            }
          }
        default:
            return state;
    }
} 