import React from 'react';
import {Link} from 'react-router-dom';


const Header = ({header})=>{

  return(

    <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
             <Link to="/" > <button className="navbar-brand">LOGO </button></Link>
          </div>
            <ul className="nav nav-tabs">
                <li className="nav-item active"> <Link to="/"className="nav-link active" >Home</Link></li>
                <li className="nav-item active"> <Link to="/user"className="nav-link active" >user</Link></li>            
            </ul>
          </div>
    </nav>
  )
}

export default Header;