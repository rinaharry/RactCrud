import React, { Component } from 'react';
import login from './component/loggin/loggin'
import PageNotFound from './common/PageNotFound'
import user from './component/user/user'
import addUser from './component/user/AddUser'
import {connect} from 'react-redux'
import {authCheckState} from './store/action/Actionlogin'

import './App.css';
import {BrowserRouter, Route,Redirect,Switch } from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';
import logout from './component/logout/logout'


class App extends Component {

  state = {

  }

 componentDidMount(){
   this.props.authok()
 }

  render() {
    
    return (  
         <BrowserRouter>
          <div className="App">
             <div className="container-fluid">
                <Header header = {this.state.header} isAuthented = {this.props.isAuth}/>
                <main className="main-content"> 
                      
                      <Redirect to= "/login"exact/>
                         
                       <Switch>
                            <Route path='/user' exact component ={user}/>
                            <Route path = '/user/adduser' component= {addUser}/>
                            <Route path = '/user/:_id' component= {addUser}/>                  
                            <Route path='/login' exact  component ={login}/>
                            <Route path='/logout'   component ={logout}/>
                            <Route path ='*/*' component={PageNotFound}/>  
                       </Switch>                                
                </main>
             </div>
             <Footer/>
           </div>
       
         </BrowserRouter>   
     
         
                
         
    )}
}
const mapStateToProps= (state)=>{
  return {
    isAuth: state.auth.token
  }
}
const mapDispatchToProps = dispatch=>{
return {
  authok: () => dispatch(authCheckState())
 }}

export default connect(mapStateToProps, mapDispatchToProps)(App);
