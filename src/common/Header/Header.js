import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css"



const Header = ({isAuthented})=>{
  return(
    isAuthented ?
    <nav id="sidebar">
    <div className="sidebar-header">
        <h3><NavLink to='/home'><i className="fa fa-database" aria-hidden="true"></i> Dashboard</NavLink></h3>
    </div>

    <ul className="list-unstyled components">
  
        <li className="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-user"></i> Collaborateur</a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                    <NavLink to="/user"><i className="fa fa-home"></i> User</NavLink>
                </li>
                <li>
                    <NavLink to={"#"}><i className="fa fa-home"></i> Home 2</NavLink>
                </li>
                <li>
                    <NavLink to={"#"}><i className="fa fa-home"></i> Home 3</NavLink>
                </li>
            </ul>
        </li>
        <li>
            <NavLink to={"#"}><i className="fa fa-server" aria-hidden="true"></i>  About</NavLink>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-pagelines"></i> Pages</a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                    <NavLink to={"#"}> Page 1</NavLink>
                </li>
                <li>
                    <NavLink to={"#"}>Page 2</NavLink>
                </li>
                <li>
                    <NavLink to={"#"}>Page 3</NavLink>
                </li>
            </ul>
        </li>
        <li>
            <NavLink to={"#"}> Portfolio</NavLink>
        </li>
        <li>
            <NavLink to={"#"}><i className="fa fa-phone"></i> Contact</NavLink>
        </li>
    </ul>


  </nav>
   :null
  )
}

export default Header;