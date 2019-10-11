import React, {Component} from 'react'
import {connect} from  'react-redux'
import {addUser, upadteUser} from '../../store/action/userAction'
import {Redirect} from 'react-router-dom'
import Spinner from '../../common/spinner/Spinner'
import { required, length,email } from '../../util/validator';
import Input from '../uiHary/input'
class AddUser extends  Component {
  
  state = {
    userForm:{
      _id:{ 
        value:this.props.user? this.props.user._id: null,
        valid: true,
        touched: true,   
      },
      email:{
        value: this.props.user ? this.props.user.email: "",
        valid: false,
        touched: false,
        validators: [required, email]
       },
       lastName:{
        value: this.props.user ? this.props.user.lastName: "",
        valid: false,
        touched: false,
        validators: [required, length({ min:2})]
       },
       firstName:{
        value: this.props.user ? this.props.user.firstName: "",
        valid: false,
        touched: false,
        validators: [required,length({ min:2})]
       },
       contact:{
        value: this.props.user ? this.props.user.contact: "",
        valid: false,
        touched: false,
        validators: [required,length({ min:2})]
       },
       adrress:{
        value: this.props.user ? this.props.user.adrress:  "",
        valid: false,
        touched: false,
        validators: [required, length({ min:2})]
       },
       password:{
        value: this.props.user ? this.props.user.password:  "",
        valid: false,
        touched: false,
        validators: [required, length({ min:2})]
       },
    },
    done: false,
    loading: false,
    formIsValid: false
  }

  componentDidMount () {
    console.log(this.props.user)
  }
  handleChange=( input, value) =>{

    //console.log(this.state.formIsValid)
    this.setState( prevState => {
      let isValid = true;
      console.log(input)
      for (const validator of prevState.userForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.userForm,
        [input]: {
          ...prevState.userForm[input],
           valid: isValid,
           value: value
        }
      };
    //  console.log(updatedForm)
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        userForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  }
  inputBlurHandler = input => {
    this.setState(prevState => {
      return {
        userForm : {
          ...prevState.userForm,
          [input]: {
            ...prevState.userForm[input],
            touched: true
          }
        }
      };
    });
  }
  HandlerSubmit = (e) => {
        e.preventDefault()
        this.setState({
          loading: true 
      })
      const user = {
        email: this.state.userForm.email.value,
        lastName:this.state.userForm.lastName.value,
        firstName: this.state.userForm.firstName.value,
        contact:this.state.userForm.contact.value,
        adrress: this.state.userForm.adrress.value,
        password: this.state.userForm.password.value
        
      }
      this.props.onCreateUser(user, this.props.error)
        .then( res => {
           if (this.props.error === null) {
             this.setState({
               done: true,
               loading: false
              
            })
          } else{
           this.setState({
              done: false,
              loading: false
            
           }) 
         }
        })  
  }

  upadateduser = (e) => {
    this.setState({
      loading: true
    });
    const user = {
      email: this.state.userForm.email.value,
      lastName:this.state.userForm.lastName.value,
      firstName: this.state.userForm.firstName.value,
      contact:this.state.userForm.contact.value,
      adrress: this.state.userForm.adrress.value,
      password: this.state.userForm.password.value,
      _id: this.state.userForm._id.value
    }

     e.preventDefault()
      this.props.onUpdateUser(user)
      .then( res => {
        if( this.props.error === null) {
            this.setState({
             done: true,
             loading: false
            
         })
        } else{
         this.setState({
           done: false, 
           loading: false
          
         }) 
       }
      })  
  }

  render () { 
    
    const form  = <div className="container  mt-5">
                   <div className="card o-hidden border-0 shadow-lg  mt-5">
                    <div className="card-body p-0"> 
                      <div className="row">
                        <div className="col-lg-12">
                        <div className="p-5">
                          <div className="text-center">
                         
                            {this.props.error}
                            {this.state.loading && <Spinner/>}
                          </div>
                          <form className="user">
                            <div className="form-group row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                <Input control="input"
                                          id="email"
                                          label="Email"
                                          type="email"
                                          onChange={this.handleChange}
                                          onBlur={this.inputBlurHandler.bind(this, 'email')}
                                          value={this.state.userForm.email.value}
                                          valid={this.state.userForm.email.valid}
                                          touched={this.state.userForm.email.touched}
                                        
                                   />
                              </div>
                              <div className="col-sm-6">
                               <Input control="input"
                                       id="lastName"
                                       label="lastName"
                                       type="text"
                                       onChange={this.handleChange}
                                       onBlur={this.inputBlurHandler.bind(this, 'lastName')}
                                       value={this.state.userForm.lastName.value}
                                       valid={this.state.userForm.lastName.valid}
                                       touched={this.state.userForm.lastName.touched}                                        
                                   />  
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                              <Input control="input"
                                          id="firstName"
                                          label="firstName"
                                          type="text"
                                          onChange={this.handleChange}
                                          onBlur={this.inputBlurHandler.bind(this, 'firstName')}
                                          value={this.state.userForm.firstName.value}
                                          valid={this.state.userForm.firstName.valid}
                                          touched={this.state.userForm.firstName.touched}
                                        
                                   />
                              </div>
                              <div className="col-sm-6">
                              <Input control="input"
                                          id="adrress"
                                          label="adrress"
                                          type="text"
                                          onChange={this.handleChange}
                                          onBlur={this.inputBlurHandler.bind(this, 'adrress')}
                                          value={this.state.userForm.adrress.value}
                                          valid={this.state.userForm.adrress.valid}
                                          touched={this.state.userForm.adrress.touched}
                                        
                                   />
                              </div>
                            </div>
                            <div className="form-group  row">
                               <div className="col-sm-6 mb-3 mb-sm-0">
                                 <Input control="input"
                                          id="contact"
                                          label="contact"
                                          type="text"
                                          onChange={this.handleChange}
                                          onBlur={this.inputBlurHandler.bind(this, 'contact')}
                                          value={this.state.userForm.contact.value}
                                          valid={this.state.userForm.contact.valid}
                                          touched={this.state.userForm.contact.touched}
                                        
                                    />
                                </div>
                                {!this.props.user && <div className="col-sm-6">
                                <Input control="input"
                                          id="password"
                                          label="password"
                                          type="password"
                                          onChange={this.handleChange}
                                          onBlur={this.inputBlurHandler.bind(this, 'password')}
                                          value={this.state.userForm.password.value}
                                          valid={this.state.userForm.password.valid}
                                          touched={this.state.userForm.password.touched}    
                                   />
                                </div>}
                            </div>
                        
                            {/* <div className="form-group row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                              
                              </div>
                              <div className="col-sm-6">
                               
                              </div>
                            </div> */}
                              {this.props.user &&
                              <div className="text-right">
                                 <button className="btn btn-primary btn-user text-center text-justify pull-rigth " onClick ={this.upadateduser}>
                                   update 
                                 </button>
                              </div>   
                             }
                             {this.state.userForm._id.value === null &&
                                <div className="text-right">
                                   <button disabled={!this.state.formIsValid} className="btn btn-primary btn-user text-center text-justify pull-rigth " onClick ={ this.HandlerSubmit}>
                                      save
                                   </button>
                                </div>
                              }
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     return (
          this.state.done ? <Redirect to="/user"/> : form
        )
    }
}
const mapDispatchToProps = dispatch => {

  return {
    onCreateUser:(user) => dispatch(addUser(user)),
    onUpdateUser:(user) => dispatch(upadteUser(user))
  }

}
function mapStateToProps (state, props) {
  const {match} = props

    if (match.params._id) {
        return {
            user:  state.users.users.find(user => user._id === match.params._id),
            error: state.users.error,
            name:"update user"
        }
    }
    return {
            user: null,
            error: state.users.error,
            name:"add user"
      }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddUser);