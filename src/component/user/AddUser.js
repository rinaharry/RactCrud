import React, {Component} from 'react'
import {connect} from  'react-redux'
import {addUser, upadteUser} from '../../store/action/userAction'
import {Redirect} from 'react-router-dom'
class AddUser extends  Component{
  state= {
    _id: this.props.user? this.props.user._id: null,
    lastName: this.props.user ? this.props.user.lastName:  "",
    firstName: this.props.user ? this.props.user.firstName:  "",
    contact: this.props.user ? this.props.user.contact: "",
    adrress: this.props.user ? this.props.user.adrress:  "",
    matricule: this.props.user ? this.props.user.matricule:  "",
    done: false
  }
  
   onchange = (e) =>{
      this.setState({
        [e.target.id]: e.target.value,
      })
    }
  componentDidMount(){
      console.log(this.state)
  }
  
  onCreate = (e) => {
        e.preventDefault()
         console.log(this.state)
        this.props.addUser(this.state)
        .then(res =>{
                console.log(res)
                this.setState({
                    done: true
                })
         })
         .catch(
             err=>{
                 console.log(err)
             }
         )
    }

  upadateduser = (e) =>{
        e.preventDefault()
        this.props.upadteUser(this.state)
        .then(
            res=>{
                this.setState({
                    done: true
                })
            }
        )
        
    }
    render (){ const form  = 
                <div className="container  py-3 mt-5">
                <div className="card o-hidden border-0 shadow-lg  mt-5">
                  <div className="card-body p-0"> 
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an User!</h1>
                          </div>
                          <form className="user">
                            <div className="form-group row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" id="firstName" defaultValue={this.state.firstName} onChange={this.onchange}  placeholder="First Name"/>
                              </div>
                              <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" id="lastName" defaultValue= {this.state.lastName} onChange={this.onchange} placeholder="Last Name"/>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" id="contact" defaultValue={this.state.contact} onChange={this.onchange} placeholder="nummber phone"/>
                              </div>
                              <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" id="matricule" defaultValue={this.state.matricule} onChange={this.onchange} placeholder="matricule"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <input type="email" className="form-control form-control-user" id="email" defaultValue={this.state.email} onChange={this.onchange} placeholder="Email Address"/>
                            </div>
                            <div className="form-group row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" className="form-control form-control-user" id="password" defaultValue={this.state.password} onChange={this.onchange} placeholder="Password"/>
                              </div>
                              <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" id="adrress" onChange={this.onchange} defaultValue={this.state.adrress} placeholder="Adress"/>
                              </div>
                            </div>
                            {this.props.user && <button className="btn btn-primary btn-user text-center text-justify pull-rigth " onClick ={this.upadateduser}>
                            update 
                            </button>}
                            {this.state._id === null && <button className="btn btn-primary btn-user text-center text-justify pull-rigth " onClick ={ this.onCreate}>
                            save
                            </button>}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
        return(
            this.state.done? <Redirect to="/user"/>:form
        )
    }
}
function mapStateToProps(state, props){
    const {match} = props
    if(match.params._id){
        return {
            user:  state.users.find(user => user._id === match.params._id)
        }
    }  
    return {
            user: null
        }
}
export default connect(mapStateToProps, {addUser, upadteUser}) (AddUser);