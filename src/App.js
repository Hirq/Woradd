import React, { Component } from 'react';
import MiniDrawer from './components/MiniDrawer';
import { BrowserRouter as Router } from 'react-router-dom';
import './components/About.scss';

class App extends Component {
  render() {
    return(
      <Router>
        <MiniDrawer/>
      </Router>
    );
  }
}

export default App;



