import React, { Component } from 'react';
import login from './component/loggin/loggin'
import PageNotFound from './common/PageNotFound'
import user from './component/user/user'
import addUser from './component/user/AddUser'
import {connect} from 'react-redux'
import {authCheckState} from './store/action/Actionlogin'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css'

import './App.css';
import {BrowserRouter, Route,Redirect,Switch } from 'react-router-dom';

import Header from './common/Header/Header';
import Footer from './common/footer/Footer';
import logout from './component/logout/logout'
import Produit from './component/produit/Produit'
import Home from './common/home/Home' 


class App extends Component {

 componentDidMount(){
   this.props.authok()
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
               <Route path ='/produits' component = {Produit}/>
               <Route path ='/user' exact component = {user}/>
               <Route path = '/user/adduser' component = {addUser}/>
               <Route path = '/user/:_id' component = {addUser}/>                  
               <Route path ='/login' exact  component = {login}/>
               <Route path ='/logout'   component = {logout}/>
               <Route path ='*/*' component = {PageNotFound}/> 
               <Redirect to= "/login"exact/>  
            </Switch>  
        );
      }
       
    return (  
         <BrowserRouter>
          <div className = "App">
             <div className = "container-fluid">
                <Header  isAuthented = {this.props.isAuth}/>
                <main className = "main-content">      
                    {
                      routes
                    }                              
                </main>
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
