import * as ActionType from '../action/ActionType'
const initialiseState={
    token :null,
    userId: null,
    error:null, 
    loading: false,
    authRedirectPath: '/'
}

const reduce =(state = initialiseState, action)=>{
    switch (action.type) {

         case ActionType.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            }

         case ActionType.AUTH_SUCCESS:
           //  console.log(action.success)
            return {
                ...state,
                ...action.success,
                loading: false
            }

         case ActionType.AUTH_FAIL:
             return {
                 ...state,
                 loading: false,
                 error : action.error.message,
                 token: null
             }

         case ActionType.AUTH_LOGOUT:
             return {
                 ...state,
                 token : null,
                 userId: null,
             }     
        case ActionType.SET_AUTH_REDIRECT_PATH: return {
            ...state,
            ...action.path
        }
         default:
           return state
       }

}
export default reduce