import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css"



const Header = ({isAuthented})=>{
  return(
    isAuthented ?
   <header className='header'>
        <div className="header__logo">
            <h1>Logo</h1>
        </div>

       <nav className="header__items">

          <ul>
          <li><NavLink to ="/home">Home</NavLink></li>
          <li><NavLink to ="/user">user</NavLink></li>
          <li><NavLink to ="/produits">Produits</NavLink></li>
          {!isAuthented ? <li><button ><NavLink to="/login">login</NavLink></button></li>:
                  <li><button ><NavLink to="/logout">logout</NavLink></button></li> 
            }  
          </ul>
       </nav>
    </header>
   :null
  )
}

export default Header;