import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import './About.css';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            items: [],
        }
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term],
        });
    }

    render() {
      return(
        <div id="word">
            <form onSubmit={this.onSubmit}>
                <input id="addWordInput" placeholder="ANG" value={this.state.term} onChange={this.onChange}/>
                <input id="addWordInput" placeholder="PL" value={this.state.term} onChange={this.onChange}/>

                <button id="addWord" type="submit">Add Word</button>
            </form>
        </div>
  
      );
    }
  }

export default About;