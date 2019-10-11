import axios from '../../UrlBase'
export const GET_USER = "GET_USER"
export const ADD_USER = "ADD_USER"
export const  DEl_USER = "DEl_USER"
export const UPDATE_USER = "UPDATE_USER"
export const USER_ERROR = "USER_ERROR"
export const ACTIVE_DESACTIVE = "ACTIVE_DESACTIVE"


export function setUser(users){

if (users) {
    return {
        type: GET_USER,
        users
    }
} else {
     return {
            type: GET_USER,
            users:[]
        }  
    }
}

export function setadduser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function ondeleteUser(user){
    return {
        type: DEl_USER,
        user
    }
}

export function updateuser(user){
    return{
        type: UPDATE_USER,
        user
    }
}

export function userfailed(error) {
    return {
        type: USER_ERROR,
        error
    }
}
export function useractivedesactive() {
    return {
        type: ACTIVE_DESACTIVE,

    }
}

export const getUser = (token) => {
  return async dispatch => {
      try{
        const res = await axios.get('/',{
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
             }
        });  
      return dispatch(setUser(res.data.data));
      }catch(err){
        return dispatch(userfailed(err.response.data.message))
      }
   }
}

export const addUser = (user) => {
        return async (dispatch) => {
           try {
            const res = await axios.post('/', user);
            //console.log(res.data.data)
            return dispatch(setadduser(res.data.data))
           } catch(err){
              // console.log(err.response)
            return dispatch(userfailed(err.response.data.message))
           }
          
      }
}

export const upadteUser = (user) => {
 
    return async dispatch => {
        try{
        const res = await axios.put(`/${user._id}`, user)
        return dispatch(updateuser(res))
         }
        catch(err) {
            return dispatch(userfailed(err.response.data.message))
        }
    }
}
export const activeDesactiveUser = (user) => {
 
    return async dispatch => {
        try {
        const res = await axios.put(`/${user._id}/activedesactive`, user)
        if(res) {
            dispatch(useractivedesactive())
            return dispatch(getUser())
         }
         }
        catch(err) {
            return dispatch(userfailed(err.response.data.message))
        }
    }
}

export const deleteUser = (user) => {
 
    return async dispatch => {
        try {
            const res = await axios.delete(`http://localhost:3002/${user._id}`, user)
            return dispatch(ondeleteUser(res))
        }
         catch (err) {
            return dispatch(userfailed(err.response.data.message))
        }
    }   
}