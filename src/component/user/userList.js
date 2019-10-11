import React from 'react'
import { Link} from 'react-router-dom'

const userList = props => {
    
  const usertab = props.users.map((user,i) =>
            <tbody key={i}>
                   <tr>
                     <td className="text-center">{user.lastName}</td>
                     <td className="text-center">{user.firstName} </td>
                     <td className="text-center"> {user.adrress}</td>
                     <td className="text-center"> {user.email}</td>
                     <td style={{cursor:"pointer"}} className={user.status? "btn-success": "btn-danger"} onClick={()=>props.activeDesactiveuser(user)} role="button"> {user.status? "active": "desactive"}</td>
                     <td><Link to ={`/user/${user._id}`}> <i className="fa fa-edit btn btn-info"></i></Link></td>
                     <td  onClick={()=>props.deleteUser(user)} style={{cursor:"pointer"}}><i className="fa fa-trash btn btn-danger" ></i></td>
                    </tr>
            </tbody>    
       )
      return (
        <div className= "container-fluid">
          <div className="row ">
           <div className= "col-lg-12 text-center py-2">  
            <table className="table table-stripped ">
              <thead>
                  <tr>
                      <th className="text-center">lastName</th>
                      <th className="text-center">firstName</th>
                      <th className="text-center">adrress</th>
                      <th className="text-center">email</th>
                  </tr>
              </thead>
                  {usertab }
           </table>
           <i className="fas fa-file-invoice-dollar    "></i> 
          </div>  
         </div>  
        </div>    
          )          
}
export default userList