import { Component, useContext } from "react";
import "./NavbarStyles.css";
import {MenuItems} from "./MenuItems";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../routes/AuthContext";


function Navbar(){
    
      const {isLoggedIn, logout}=useContext(AuthContext);
 
        return (
          <nav className="NavbarItems">
            <h1 className="navbar-logo">ICMS</h1>

            {/* <div className="menu-icons" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div> */}

            <ul className="nav-menu">
              
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      <i className={item.icon}></i>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              {/* {isLoggedIn ? (
          <button onClick={logout} className="nav-links">
            Logout
          </button>
        ) : (
          <Link to="/ " className="nav-links">
            Login
          </Link>
        )} */}
            </ul>
          </nav>
        );
    }


export default Navbar;