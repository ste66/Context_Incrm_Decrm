import React from 'react'
import './index.css';
import { NavLink } from 'react-router-dom'




const Nav = () => (


    <div className="nav">
      
      <nav className="main-menu">
				
        <NavLink exact to="/" activeStyle={{
              backgroundColor: "red",
              color: "white"}}> Home  </NavLink>
      
       

          <NavLink to="/about"
              activeStyle={{
              backgroundColor: "red",
              color: "white"
            }}>
            About Me
          </NavLink>


          <NavLink to="/show"
              activeStyle={{
              backgroundColor: "red",
              color: "white"
            }}>
            Show My List
          </NavLink>

      </nav>
    </div>
   
  );

export default Nav;