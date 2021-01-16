import React, { Component } from 'react';
import './Login.scss';

class LoginForm extends Component {
  state = {
    login: '',
    password: '',
  }

  handleSubmit = (e) =>  {
    e.preventDefault();
    (((e.target[0].value) === 'admin') && ((e.target[1].value) === 'admin')) ? (console.log('OK')) : (console.log('ZLE'));
  }

  render(){
    return(
      <div className='wrapperLogin'>
        <h2 className='wrapperLoginHeader'>Login</h2>
        <form onSubmit={this.handleSubmit}> 
          <label>Login</label>
          <input type="text" name="login" placeholder="Login" ></input>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"></input>
          <button type="submit" value="Submit" >LOGIN</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
