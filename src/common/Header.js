import React from 'react';
import {Link ,NavLink} from 'react-router-dom';

const Header = ({header})=>{

  return(

    <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
             <Link to="/" > <button className="navbar-brand">LOGO </button></Link>
          </div>
            <ul className="nav nav-tabs">
                <li className="nav-item active"> <Link to="/"className="nav-link active" >Home</Link></li>
                {  
                 header.map((item,i) => {
                      return <li className="nav-item" key={i}> <NavLink to={item.title} className="nav-link" > {item.title}</NavLink></li>
                  })
               }
            </ul>
          </div>
    </nav>
  )
}

export default Header;