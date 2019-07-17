import React from 'react'
import { Link } from 'gatsby'
import { Component } from 'react';
import  Menu from './../images/icons/menu.svg';

class Header extends Component {
 componentDidMount() {
 	import M from 'materialize-css/dist/js/materialize.js';
var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
}
  render() { 
    return (
      <React.Fragment>
        <nav className="purple darken-3">
          <div className="nav-wrapper">
            <Link className="brand-logo" to="/">Appxiety</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <Menu/>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
            <Link
            to="/main-blog">
            Blog
            </Link>
              </li>
              <li>
                 <Link
            to="/aboutus">
            About Us
            </Link>
              </li>
              <li>
                 <Link
            to="/faq">
            FAQ
            </Link>
              </li>
              <li>
                 <Link
            to="/contactUs">
            Contact Us
            </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          
             <li>
            <Link
            to="/main-blog">
            Blog
            </Link>
              </li>
              <li>
                 <Link
            to="/aboutus">
            About Us
            </Link>
              </li>
              <li>
                 <Link
            to="/faq">
            FAQ
            </Link>
              </li>
              <li>
                 <Link
            to="/contactUs">
            Contact Us
            </Link>
              </li>
        </ul>

        
      </React.Fragment>
    );
  }
}




export default Header;

