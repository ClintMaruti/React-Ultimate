import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <nav>
    <div className="container">
      <div className="nav-wrapper">
        <a href={ROUTES.LANDING} className="brand-logo">
          Clima.Dev
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
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
            <SignOutButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav>
    <div className="container">
      <div className="nav-wrapper">
        <a href={ROUTES.LANDING} className="brand-logo">
          Clima.Dev
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to={ROUTES.LANDING}>Landing Page</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
