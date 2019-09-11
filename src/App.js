import React, { Component } from 'react';

import './App.css';
import {BrowserRouter, Switch,RouterChildContext } from 'react-router-dom';
import RouterComponent from './routes/RouteComponent'
import Header from './common/Header';
import Footer from './common/Footer';


class App extends Component {

  state = {

   "header" : [
    
     {id:1, title:"activite"},
     {id:2, title:"project"},
     {id:3, title:"contact"}
   ]
    
  }
 
 

  render() {
    
    return (  
         <BrowserRouter>
          <div className="App">
             <div className="container-fluid">
                <Header header = {this.state.header}/>
                <main className="main-content"> 
                  
                  <RouterComponent/>
                   
                </main>
             </div>
             <Footer/>
           </div>
       
         </BrowserRouter>   
     
         
                
         
    )}
}

export default App;
