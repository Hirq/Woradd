import React, { Component } from 'react';
import MiniDrawer from './components/MiniDrawer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import List1 from "./components/List1";
import Form from "./components/Form";

class App extends Component {
  render() {
    return(
      <Router>
        <MiniDrawer/>
      </Router>



      /* <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div> */
    );
  }
}

export default App;
