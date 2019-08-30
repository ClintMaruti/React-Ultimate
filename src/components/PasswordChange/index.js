import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="card blue-grey darken-1" style={{ padding: "20px" }}>
            <div className="row">
              <div className="input-field col s12 center">
                <input
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="New Password"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 center">
                <input
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirm New Password"
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
export default withFirebase(PasswordChangeForm);
