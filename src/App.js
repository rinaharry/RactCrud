import React, { Component } from 'react';
import login from './component/loggin/loggin'
import PageNotFound from './common/PageNotFound'
import user from './component/user/user'
import addUser from './component/user/AddUser'
import {connect} from 'react-redux'
import {authCheckState} from './store/action/Actionlogin'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
//import '../node_modules/font-awesome/css/font-awesome.min.css'

import './App.css';
import {BrowserRouter, Route,Redirect,Switch } from 'react-router-dom';

import Header from './common/Header/Header';
import Footer from './common/footer/Footer';
import logout from './component/logout/logout'

import Home from './common/home/Home' 
import Navbar from './common/navbar/Navbar'
import $ from 'jquery'
class App extends Component {

 componentDidMount(){
   this.props.authok()
   $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});
 }

  render() {
    let routes = (
      <Switch>
        <Route path = "/login" component = {login} />
        <Redirect to = "/login"exact/>
      </Switch>
      );
      if ( this.props.isAuth ) {
        routes = (
            <Switch>
               <Route path = "/home" exact component = {Home}/>
               <Route path ='/user' exact component = {user} />
               <Route path = '/user/adduser' component = {addUser}/>
               <Route path = '/user/:_id' exact component = {addUser}/>                  
               <Route path ='/login' exact  component = {login}/>
               <Route path ='/logout'   component = {logout}/>
               <Route path ='*/*' component = {PageNotFound}/> 
               <Redirect to="/login" exact/>  
            </Switch>  
        );
      }
       
    return (  
         <BrowserRouter>
          <div className = "App">
             <div className = "wrapper">
               
               
                <Header  isAuthented = {this.props.isAuth}/>
                <div id="content">
                  {this.props.isAuth && <Navbar  />} 
                 <main className = "main-content">      
                    {
                      routes
                    }                              
                </main>
                </div>
             </div>
             <Footer/>
           </div>
         </BrowserRouter>        
    )}
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
return {
  authok: () => dispatch(authCheckState())
 }}

export default connect(mapStateToProps, mapDispatchToProps)(App);
