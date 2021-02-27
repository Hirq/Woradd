import React, { Component } from 'react';
import MiniDrawer from 'components/MiniDrawer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate'
import 'components/About.scss';

class App extends Component {
  render() {
    return(
      <Router>
        <MainTemplate>
          <MiniDrawer/>
        </MainTemplate>
      </Router>
    );
  }
}

export default App;



