import React from "react";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <button
    className="btn waves-effect waves-light blue-grey"
    onClick={firebase.doSignOut}
    type="button"
  >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton)