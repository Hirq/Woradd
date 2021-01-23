import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    login: '',
    password: '',
  }

  handleSubmit = (e) =>  {
    e.preventDefault();
    (((e.target[0].value) === 'admin') && ((e.target[1].value) === 'admin')) ? (console.log('OK')) : (console.log('ZLE'));
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  handleChangeLogin = (e) => {
    this.setState({
      login: e.target.value,
    })
  }

  render(){
    const {login, password} = this.state;
    return(
      <div className='wrapperLogin'>
        <h2 className='wrapperLoginHeader'>Login</h2>
        <form onSubmit={this.handleSubmit}> 
          <label>Login</label>
          <input type="text" name="login" placeholder="Login" onChange={this.handleChangeLogin} ></input>
          {(login.length < 1) ? <label id='validatorlabel'>Required login</label> : null }
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChangePassword}></input>
          {(password.length <= 7) ? <label id='validatorlabel'>Min 8 characters</label> : null }
          <div className="buttons">
            <Link to={"/register" } key='RegisterForm' className="LinkItem">
              <button >Register</button>
            </Link>
            {(login !== "" && password !== "") && (password.length >= 8)  ? <button type="submit" value="Submit" >LOGIN</button> : <button type="submit" value="Submit" id="buttonNotEnabled" >LOGIN</button> }
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
