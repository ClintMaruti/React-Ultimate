import React from "react";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

const AccountPage = () => (
  <div className="container center">
    <h1 className="center blue-grey-text">Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);
export default AccountPage;
