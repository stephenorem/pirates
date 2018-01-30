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
              <Link to='/Classes'>Ye Classes</Link>
            </li>
            <li className="last">
              <Link to='/Lectures'>Ye Lectures</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
