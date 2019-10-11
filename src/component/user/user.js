import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {getUser,deleteUser,activeDesactiveUser} from  '../../store/action/userAction'
import UserList from './userList'
import {Link} from 'react-router-dom'
import Modal from '../../common/modal/Modal'


 class user extends Component {

     state = {
          deleteUser: false
       }

  componentDidMount () {

    if(this.props.token!== null){
      this.fecthUser()
    } else {
      this.props.history.push('/login');
    }

  }

  fecthUser = () => {
    this.props.onFetchUserr(this.props.token)
  }
  deleteUser = (user) => {
    this.setState({
      deleteUser: true
    })
  
    this.props.ondeleteUser(user)
    .then(
      res => {
        this.fecthUser()
      }
    )
    
  }
activeDesactiveuser =  (user)=>{
   this.props.activedesactiveuser(user)
}
   render() {
        return (
            <div>

            
               {this.props.token &&<UserList  users={this.props.users} deleteUser= {this.deleteUser} activeDesactiveuser={this.activeDesactiveuser}/>}
               <div className="text-right mr-5">
                  <Link to ="/user/adduser"> <button className="btn btn-primary"> add user </button></Link> 
               </div>
               {this.state.deleteUser && <Modal title= "delete use"/>}
               
            </div>
          
        )
      }
  }
 const  mapStateToProps = (state) => {

  return {
      users: state.users.users,
      token : state.auth.token
    }
  }
  const mapDispatchToProps = dispatch => {
    
    return {
      onFetchUserr: (token) => dispatch(getUser(token)),
      ondeleteUser: (user) => dispatch(deleteUser(user)),
      activedesactiveuser: (user) => dispatch(activeDesactiveUser(user))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps) (user);
