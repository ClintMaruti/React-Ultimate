import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const PasswordForgetPage = () => (
  <div className="container center">
    <h2 className="center blue-grey-text">Password Forget</h2>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="card blue-grey darken-1" style={{ padding: "20px" }}>
            <div className="row">
              <div className="input-field col s12 center">
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              disabled={isInvalid}
              type="submit"
            >
              Reset My Password
            </button>
            {error && <p>{error.message}</p>}
          </div>
        </form>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
