import React from 'react';
import agent from '../agent';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  updateUsername(event) {
    this.setState({username: event.target.value});
  }

  updatePassword(event) {
    this.setState({password: event.target.value});
  }

  registerUser() {
    var username = this.state.username;
    var password = this.state.password;

    if (username.length === 0 || password.length === 0) {
      // Can't submit a request with empty values
      return;
    }

    var user = {
      'name': username,
      'password': password
    }

    agent.User.register(user);
  
    /*
    fetch('/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res != 201) {
        console.log(res.body.message);
      } else {
        this.props.updateLogin(true);
      }
    });
    */
  }

  render() {
    return (
      <div className='registerDiv'>
        <input type='text' value={this.state.username} onChange={this.updateUsername} placeholder='username'/>
        <input type='password' value={this.state.password} onChange={this.updatePassword} placeholder='password'/>
        <button onClick={this.registerUser}><span>Register</span></button>
      </div>
    );
  }
}

export default Register;