import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

const mapStateToProps = (state) => ({
  ...state.user
});

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        passwordConfirm: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password, passwordConfirm } = this.state;
    const { dispatch } = this.props;
    if (username && password && passwordConfirm) {
        if (password !== passwordConfirm) {
          // TODO: Update the page somewhere to tell the user that passwords don't match.
          return;
        } else {
          dispatch(userActions.register(username, password));
        }
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, passwordConfirm } = this.state;
    return (
      <div>
        <p>
          <Link to="/login">
            Have an Account?
          </Link>
        </p>

        <form onSubmit={this.handleSubmit}>
          <fieldset>

            <fieldset>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={this.handleChange} />
            </fieldset>

            <fieldset>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange} />
            </fieldset>

            <fieldset>
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={this.handleChange} />
            </fieldset>

            <button
              type="submit"
              disabled={loggingIn}>
              Sign up
            </button>

          </fieldset>
        </form>
      </div>
    );
  }
}

const connectedRegister = connect(mapStateToProps)(Register);
export { connectedRegister as Register }; 