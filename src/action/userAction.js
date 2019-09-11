import axios  from  "axios"

export const GET_USER = "GET_USER"
export const ADD_USER = "ADD_USER"

export function setUser(users){
    return {
        type: GET_USER,
        users
    }
}
export function setadduser(user){
    return {
        type: ADD_USER,
        user
    }
}

export const getUser = () => {
  return async dispatch=>{
   const res = await fetch('http://localhost:3002/');
      const data = await res.json();
      return dispatch(setUser(data.data));
   }
}

export const addUser = (user) => {
        return async (dispatch) => {
            const res = await axios.post('http://localhost:3002/', user);
            console.log("response ", res.data.data);
            return dispatch(setadduser(res.data.data))
        }
}
export const upadteUser= (user)=>{
    console.log(user)
    return async dispatch=>{
        const res = await axios.put(`http://localhost:3002/${user._id}`, user)
        console.log(res)
    }
}
export const deleteUser = (user)=>{
    console.log(user)
    return async dispatch=>{
        const res = await axios.delete(`http://localhost:3002/${user._id}`, user)
        console.log(res)
    }
}