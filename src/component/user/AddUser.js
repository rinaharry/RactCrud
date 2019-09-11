import React, {Component} from 'react'
import {connect} from  'react-redux'
import {addUser, upadteUser} from '../../action/userAction'
import {Redirect} from 'react-router-dom'
class AddUser extends  Component{
  state= {
    _id: this.props.user? this.props.user._id: null,
    lastName: this.props.user ? this.props.user.lastName:  "",
    firstname: this.props.user ? this.props.user.firstname:  "",
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
    render (){
     const from = <div className=" card text-center">
            <form className="form-horizontal text-justify">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="lastName">lastName</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.onchange} placeholder="lastName"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="firstname">firstname</label>
                    <div className="col-sm-4"> 
                        <input type="text" className="form-control" id="firstname" value={this.state.firstname} onChange={this.onchange} placeholder="Enter text"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="adrress">adrress</label>
                    <div className="col-sm-4"> 
                        <input type="text" className="form-control" id="adrress" value={this.state.adrress}  onChange={this.onchange} placeholder="Enter text"/>
                    </div>
                </div>
                
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="matricule">matricule</label>
                    <div className="col-sm-4"> 
                        <input type="text" className="form-control" id="matricule"value={this.state.matricule}   onChange={this.onchange} placeholder="Enter text"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="contact">contact</label>
                    <div className="col-sm-4"> 
                        <input type="text" className="form-control" id="contact" value={this.state.contact}  onChange={this.onchange} placeholder="Enter text"/>
                    </div>
                </div>

                <div className="form-group"> 
                    <div className="col-sm-offset-2 col-sm-4">
                        {this.props.user && <button type="submit" className="btn btn-default" onClick ={ this.upadateduser}>update</button>}
                        {this.state._id===null && <button type="submit" className="btn btn-default" onClick ={  this.onCreate}>create</button>}
                    </div>
                </div>
            </form>
        </div>  
        
        return(
            this.state.done? <Redirect to="user"/>: from
        )
    }
}
function mapStateToProps(state, props){
    const {match} = props
    if(match.params._id){
        return {
            user:  state.users.find(user =>user._id === match.params._id)
        }
    }  
    return {
            user: null
        }
}
export default connect(mapStateToProps, {addUser, upadteUser}) (AddUser);