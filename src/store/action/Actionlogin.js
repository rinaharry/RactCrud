import * as ActionTypes from './ActionType';
import axios from '../../UrlBase'
export const authStart = () => {
  return {
      type: ActionTypes.AUTH_START
  };
};

export const authSuccess = (succes) => {

  return {
      type: ActionTypes.AUTH_SUCCESS,
      success: succes
  };
};

export const authFail = (error) => {
  return {
      type: ActionTypes.AUTH_FAIL,
      error: error
  };
};
export const authlogout = ()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: ActionTypes.AUTH_LOGOUT
  }
}
export const expireToken = (expired)=>{
  return dispatch=>{
    setTimeout(() => {
      dispatch(authlogout())
    }, 300000);
  }
 
}
export const auth = (data) => {

  return dispatch => {
       dispatch(authStart());
       axios.post('/login',data) 
       .then(response=>{
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('expirationDate', response.data.tokenExpiration);
        localStorage.setItem('userId', response.data.userId);
        dispatch(authSuccess(response.data))
        dispatch(expireToken(response.data.tokenExpiration))
      
       })
       .catch(
         err =>{
          dispatch(authFail(err))
         }
       )
  }
}
export const setAuthRedirectPath = (path) => {

  return {
      type: ActionTypes.SET_AUTH_REDIRECT_PATH,
      path: path
  };
};
export const authCheckState = () => {
  return dispatch => {
      const token = localStorage.getItem('token');
      if (!token) {
          dispatch(authlogout());
      } else {
          // const expirationDate = new Date(localStorage.getItem('expirationDate'));
          // if (expirationDate <= new Date()) {
          //     dispatch(authlogout());
          // } else {
              const userId = localStorage.getItem('userId');
              dispatch(authSuccess({token: token,userId:userId }));
              //console.log(token)
              dispatch(expireToken())
          //}   
      }
  };
};