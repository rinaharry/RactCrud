import React from 'react'
import { NavLink} from 'react-router-dom'



const userList = props => {
    
  const usertab = props.users.map((user,i) =>
            <tbody key={i}>
                   <tr>
                     <td className="text-center">{user.lastName}</td>
                     <td className="text-center">{user.firstName} </td>
                     <td className="text-center"> {user.adrress}</td>
                     <td><button type="button" className="btn btn-warning btn-xs"> <NavLink to ={`/user/${user._id}`}>EDIT</NavLink></button></td>
                     <td><button type="button" onClick={()=>props.deleteUser(user)}  className="btn btn-danger btn-xs">Delete</button></td>
                    </tr> 
            </tbody>    
       )
      return(
        <div>
            <table className="table table-bordered table-striped">
              <thead>
                  <tr>
                      <th className="text-center">nom</th>
                      <th className="text-center">age</th>
                      <th className="text-center">adress</th>
                  </tr>
              </thead>
                  {usertab }
           </table>  
           </div>    
          )          
}
export default userList