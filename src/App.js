import React, { Component } from 'react';

import './App.css';
import {BrowserRouter } from 'react-router-dom';
import RouterComponent from './routes/RouteComponent'
import Header from './common/Header';
import Footer from './common/Footer'

class App extends Component {

  state = {
    "ninja" : [
      {name: "rakoto",adress:"tana", age:3,id:1},
      {name: "voary",adress:"tana", age:23,id:2},
      {name: "mirana",adress:"tana", age:13,id:3},

    ],
   "header" : [
    
     {id:1, title:"activite"},
     {id:2, title:"project"},
     {id:3, title:"contact"}
   ]
    
  }
  addNinja = (ninjaadd)=>{
      ninjaadd.id = Math.random()
     let  ninjas = [...this.state.ninja, ninjaadd];
     this.setState({
       ninja: ninjas
     })
     console.log(ninjaadd)
  }
  deleteNinja = (ninja)=>{
       let ninjas = this.state.ninja.filter(item =>{
         return item.id !== ninja.id
       })
       console.log(ninjas);
       this.setState({
         ninja : ninjas
       })
  }

  componentDidUpdate (prevProps,prevState) {
  }

  render() {
    
    return (  
         <BrowserRouter>
         <div className="App">
             <div className="container-fluid">
                <Header header = {this.state.header}/>
                <RouterComponent/>
             </div>
             <Footer/>
          </div>
         </BrowserRouter>   
    )}
}

export default App;
