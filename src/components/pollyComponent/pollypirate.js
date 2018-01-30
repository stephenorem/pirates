import React, { Component } from 'react';

import './pollypirate.css';
import polly from '../../img/pirate-parrot.jpeg';

class Pollypirate extends Component {
  render() {
    return (
      <aside className="container-fluid">
        <img src={polly} alt="Pirate Polly" />
      </aside>
    );
  }
}

export default Pollypirate;
