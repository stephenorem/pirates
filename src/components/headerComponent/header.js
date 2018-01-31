import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import './header.css';

//import './././pirate-parrot.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          Pirate School
        </div>
        <nav>
          <ul>
            <li className="first">
              <Link to='/'>Home Port</Link>
            </li>
            <li>
              <Link to='/Culture'>Ye Culture</Link>
            </li>
            <li className="last">
              <Link to='/Language'>Ye Language</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
