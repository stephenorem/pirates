import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Classespage from './components/pages/classesPage';
import Lecturespage from './components/pages/lecturesPage';
import Pollypirate from './components/pollyComponent/pollypirate';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Classes' component={Classespage} />
            <Route exact path='/Lectures' component={Lecturespage} />
          <Pollypirate />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
