import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {getUser, deleteUser} from  '../../action/userAction'
import UserList from './userList'
import {Link} from 'react-router-dom'
import Modal from '../../common/Modal'


 class user extends Component {
     state={
          users:[],
          deleteUser: false
     }
  componentDidMount(){
    this.props.getUser()
    .then(res=>{
        this.setState({
            users: res.users
        })
    })
  }
  deleteUser = (user) => {
    this.setState({
      deleteUser: true
    })
    this.props.deleteUser(user).then(
      result=>{
        this.props.getUser()
      }
    )
    
  }
  click=()=>{
      console.log('ok',this.state.users)

  }
    render(){
        return (
            <div>
               <h1>user component</h1>
               <UserList  users={this.props.users} delelteUser= {this.deleteUser}/>
               <button><Link to ="/adduser"> add user</Link> </button>
               {this.state.deleteUser && <Modal title= "delete use"/>}
            </div>
        )
      }
  }
 function  mapStateToProps(state) {

  return {
      users: state.users
    }

  }
export default connect(mapStateToProps,{getUser, deleteUser}) (user);
