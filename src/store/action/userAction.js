import axios from '../../UrlBase'

export const GET_USER = "GET_USER"
export const ADD_USER = "ADD_USER"
export const  DEl_USER = "DEl_USER"

export function setUser(users){
    if(users){
    return {
        type: GET_USER,
        users
    }}else{
        return {
            type: GET_USER,
            users:[]
        }  
    }
}
export function setadduser(user){
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
export const getUser = (token) => {
   // console.log(token)
  return async dispatch=>{
      try{
        const res = await axios.get('/',{
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
             }
        });  
      return dispatch(setUser(res.data.data));
      }catch(err){
         throw err
      }
   }
}

export const addUser = (user) => {
        return async (dispatch) => {
           try{
            const res = await axios.post('/', user);

            return dispatch(setadduser(res.data.data))
           } catch(err){
            throw err
           }
          
        }
}
export const upadteUser = (user)=>{
    //console.log(user)
    return async dispatch=>{
        const res = await axios.put(`/${user._id}`, user)
        console.log(res)
    }
}
export const deleteUser = (user)=>{
   // console.log(user)
    return async dispatch=>{
        const res = await axios.delete(`http://localhost:3002/${user._id}`, user)
         return dispatch(ondeleteUser(res))
    }   
}