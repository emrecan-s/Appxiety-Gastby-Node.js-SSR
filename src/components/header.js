import React from 'react'
import { Link } from 'gatsby'
import { Component } from 'react';


class Header extends Component {
 
  render() { 
    return (
      <React.Fragment>
        <nav className="purple darken-3">
          <div className="nav-wrapper">
            <Link className="brand-logo" to="/">Appxiety</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
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
            to="/aboutus">
            About Us
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
            to="/aboutus">
            About Us
            </Link>
          </li>
        </ul>

        
      </React.Fragment>
    );
  }
}




export default Header;

