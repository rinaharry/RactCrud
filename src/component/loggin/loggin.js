import React ,{Component } from 'react';
import {auth} from '../../store/action/Actionlogin'
import {connect } from 'react-redux'
import Spinner from '../../common/spinner/Spinner'
import { Redirect} from 'react-router-dom'
import { required, length,email } from '../../util/validator';
import Input from '../uiHary/input'
import './loggin.css'
class login extends Component{

  constructor(props, context) {
    super(props, context);
      this.state = {
      loginForm: {
       email:{
         value: '',
         valid: false,
         touched: false,
         validators: [required, email]
        },
       password:{
         value: '',
         touched: false,
         valid: false,
         validators: [required, length({ min: 5})]
        },
       
      },
      formIsValid: false
    };
  }

  handleChange=( input, value) =>{
    // this.setState({
    //     [e.target.id]: e.target.value,
    // })
    console.log(this.state.formIsValid)
    this.setState( prevState => {
      let isValid = true;
    // console.log(prevState.loginForm, input)
      for (const validator of prevState.loginForm[input].validators) {
        isValid = isValid && validator(value);
     //   console.log(isValid,validator(value) )
      }
      const updatedForm = {
        ...prevState.loginForm,
        [input]: {
          ...prevState.loginForm[input],
           valid: isValid,
           value: value
        }
      };
      console.log(updatedForm)
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
     //   console.log(`input: ${inputName } formvalid :${formIsValid}, formupdate: ${updatedForm[inputName].valid}` )
     ///   console.log(`Fromisvalid: ${formIsValid}`)
      }
      return {
        loginForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    this.props.onAuth({email:this.state.loginForm.email.value , password : this.state.loginForm.password.value})
     
  }

  goToIndex() {
    this.context.router.push('/user');
  }

  inputBlurHandler = input => {
    this.setState(prevState => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [input]: {
            ...prevState.loginForm[input],
            touched: true
          }
        }
      };
    });
  }
    render(){
        
          
        const login = <div className="container">
                 <div className="row justify-content-center mt-5">
                   <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                      <div className="card-body p-0">
                        <div className="row">
                           <div className="col-lg-12">
                            <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                               <p>{this.props.error ? this.props.error : null}</p>
                                 <form className="user">
                                  <div className="form-group"> 
                                    <Input control="input"
                                          id="email"
                                          label="Email"
                                          type="email"
                                          onChange={this.handleChange}
                                          onBlur={this.inputBlurHandler.bind(this, 'email')}
                                          value={this.state.loginForm.email.value}
                                          valid={this.state.loginForm.email.valid}
                                          touched={this.state.loginForm.email.touched}
                                        
                                   />
                                </div>
                                <div className="form-group"> 
                                   <Input control="input"
                                          id="password"
                                          label="Password"
                                          type="password"
                                          onChange={this.handleChange}
                                          onBlur={this.inputBlurHandler.bind(this, 'password')}
                                          value={this.state.loginForm.password.value}
                                          valid={this.state.loginForm.password.valid}
                                          touched={this.state.loginForm.password.touched}     
                                   />
                                </div>

                                <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                    <input type="checkbox" 
                                           className="custom-control-input" 
                                           id="customCheck"/>
                                    <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                </div>
                                </div>
                                <button type= "submit" disabled={!this.state.formIsValid} onClick= {this.handleSubmit} style={{cursor: "pointer"}} className="btn btn-primary btn-user btn-block">
                                Login
                                </button>
                            </form>
                           { this.props.loading && <div><Spinner/></div>}
                            </div>
                        </div>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
            </div>
           
        return(
          this.props.auth !== null ? <Redirect to ="/home"/>: login
        )
        
    }
}

const mapDispatchToProps = dispatch=>{
  return {
    onAuth: (data) => dispatch(auth(data))
  }
}

const mapStateToProps =  state => {
  return { 
         loading : state.auth.loading,
         error: state.auth.error,
         auth: state.auth.token
      }
}

export default connect(mapStateToProps, mapDispatchToProps) (login) 