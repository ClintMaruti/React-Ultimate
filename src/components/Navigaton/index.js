import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from '../SignOut'
import * as ROUTES from "../../constants/routes";

export default function Navigation() {
  return (
    <nav>
      <div className="container">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Clima.Dev
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </li>
          <li>
            <Link to={ROUTES.LANDING}>Landing Page</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home Page</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}
