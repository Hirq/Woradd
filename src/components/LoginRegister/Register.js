import React, { useState } from 'react';
import 'components/LoginRegister/Login.scss';
import { Link } from 'react-router-dom';

  function RegisterForm() {

  const [state, setState] = useState({
    login: '',
    password: '',
    passwordRep: ''
  })

  const updateField = e => {
    setState({
      ...state, 
      [e.target.name]: e.target.value
    });
    console.log(state.login);
    console.log(state.password);
    console.log(state.passwordRep);
  }

  const handleSubmit = (e) =>  {
    e.preventDefault();
    (((e.target[0].value.length) >= 2) && ((e.target[1].value.length) >= 8)  && ((e.target[2].value) === (e.target[1].value))) ? (console.log('OK')) : (console.log('ZLE'));
  }

  // render(){
    return(
      <div className='wrapperLogin'>
        <h2 className='wrapperLoginHeader'>Register</h2>
        <form onSubmit={handleSubmit}> 
          <label>Login</label>
          <input type="text" name="login" placeholder="Login" onChange={updateField}></input>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={updateField}></input>
          <label>Repeat Password</label>
          <input type="password" name="passwordRep" placeholder="Repeat password" onChange={updateField}></input>
          <div className="buttons">
            <Link to={"/login" } key='LoginForm' className="LinkItem">
            <button type="submit"> Login </button>
            </Link>
            <button type="submit" value="Submit" >REGISTER</button>
          </div>
        </form>
      </div>
    );
  }

export default RegisterForm;
