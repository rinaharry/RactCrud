import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {getUser,deleteUser} from  '../../store/action/userAction'
import UserList from './userList'
import {Link} from 'react-router-dom'
import Modal from '../../common/Modal'


 class user extends Component {
     state={
          users:[],
          deleteUser: false
     }
  componentDidMount(){
    if(this.props.token!== null){
      this.fecthUser()
    }else{
      this.props.history.push('/login');
    }

  }
  fecthUser= ()=>{
  //  console.log(this.props.token, this.props.users)

    this.props.onFetcuser(this.props.token)
      .then(res=>{
         this.setState({
            users: res.users
          })
       // console.log(res)
    })
    .catch(err=>{})
  }
  deleteUser = (user) => {
    this.setState({
      deleteUser: true
    })
  
    this.props.ondeleteUser(user)
    .then(
      res=>{
        this.fecthUser()
      }
    )
    
  }
  
    render(){
        return (
            <div>
               <h1>user component</h1>
               {this.props.token &&<UserList  users={this.props.users} deleteUser= {this.deleteUser}/>}
               <button><Link to ="/user/adduser"> add user</Link> </button>
               {this.state.deleteUser && <Modal title= "delete use"/>}
               
            </div>
          
        )
      }
  }
 const  mapStateToProps=(state) =>{
  return {
      users: state.users,
      token : state.auth.token
    }
  }
  const mapDispatchToProps = dispatch=>{
    return {
      onFetcuser: (token) => dispatch(getUser(token)),
      ondeleteUser: (user)=>dispatch(deleteUser(user))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps) (user);
