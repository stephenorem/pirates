import React, { Component } from 'react';

import Ytvideo from '../ytVideo/ytvideo';
import './pages.css';

class Classespage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Culture, Aye</h1>
        <p>
          Corsair six pounders pressgang wench Jack Tar prow keelhaul. Holystone provost Admiral of the Black lugger crow's nest Blimey Brethren of the Coast. Plunder Blimey keelhaul careen jolly boat rum splice the main brace. Spyglass brig bilge rat case shot scuttle sloop execution dock.
        </p>
        <Ytvideo />
      </div>
    );
  }
}

export default Classespage;
