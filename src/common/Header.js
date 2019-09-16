import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css"



const Header = ({header,isAuthented})=>{
  return(
    <header className='header'>
    <div className="header__logo">
        <h1>Logo</h1>
    </div>
    <nav className="header__items">
        <ul>
        <li><NavLink to ="/user">user</NavLink></li>
{!isAuthented ? <li><button ><NavLink to="/login">login</NavLink></button></li>:
                <li><button ><NavLink to="/logout">logout</NavLink></button></li> 
              }
        </ul>
    </nav>
</header>
  )
}

export default Header;