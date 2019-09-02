
import React, {Component }  from 'react';
import Axios from 'axios';

import { NavLink} from 'react-router-dom';

class Home extends Component {
       state = {
             "contact":[],
             "contactDetails": {}
       }

     componentDidMount () {
            Axios.get('http://localhost:3002')
            .then(
                res => {
                    //console.log(res.data.data);
                    this.setState({
                        contact : res.data.data
                    })
                })
                
        }    
        componentDidUpdate () {  }

        detailContact = (contact) =>{
            this.setState({
                contactDetails : contact
            })

        }

    render () {
    return(
        
        <div className="">
    
          <table className="table table-bordered table-striped">
              <thead>
                <tr>
                    <th className="text-center">nom</th>
                    <th className="text-center">age</th>
                    <th className="text-center">adress</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                    <th className="text-center">Edit</th>
                </tr>
            </thead>
     
            { this.state["contact"].map((contact, i)=>{
                return(
                    <tbody key={i}>
                       <tr>
                         <td className="text-center">{contact.name}</td>
                         <td className="text-center">{contact.age} </td>
                         <td className="text-center">{contact.num} </td>
                         <td className="text-center"> {contact.adress}</td>
  
                       
                         <td><button type="button" className="btn btn-warning btn-xs"> <NavLink to ={"/" + contact.id} >EDIT</NavLink></button></td>
						 <td><button type="button"  className="btn btn-danger btn-xs">Delete</button></td>
                         <td className="text-center" onClick ={()=>this.detailContact(contact)} style={{cursor:"pointer"}} > edit</td>
                        </tr> 
                   </tbody>    
                    )
                })}  
       </table>  
       <NavLink to="addcomponent" > <button className="pull-right">add</button></NavLink>
         <div>
          { 
              Object.keys(this.state.contactDetails).length ?
                <ul>
                    <li>{this.state.contactDetails.name}</li>
                    <li>{this.state.contactDetails.adress}</li>
               </ul>
               : null
          } 
          
         </div>
       </div>
      
  )
}
}
export default Home