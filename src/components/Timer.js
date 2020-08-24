import React, { Component } from 'react';
import './About.scss'

class Timer extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 0, status: true};
      this.timer = 0;
      this.countUp = this.countUp.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.startAutoTimer = this.startAutoTimer.bind(this);
    }

    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }

    startAutoTimer() {
      if (this.timer == 0 && this.state.seconds == 0) {
        this.timer = setInterval(this.countUp, 1000);
      }
    }

    handleClick = () => {
      this.setState(state => {
        if (state.status) {
          clearInterval(this.timer);
        } else {
          this.timer = setInterval(this.countUp, 1000);
        }
        return { status: !this.state.status };
      });
    };

    countUp() {
      let seconds = this.state.seconds + 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
    }
  
    render() {
      const status = this.state.status;
      return(
        <div id="timer">
          {this.startAutoTimer()}
          m: {this.state.time.m} s:{this.state.time.s}
          <button id="timerButton" className="btn btn-sm" onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        </div>
      );
    }
  }

  export default Timer;