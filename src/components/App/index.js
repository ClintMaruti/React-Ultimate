import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from '../Navigaton'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'

import * as ROUTES from '../../constants/routes'

export default function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route  path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route  path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route  path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route  path={ROUTES.HOME} component={HomePage} />
        <Route  path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route  path={ROUTES.ADMIN} component={AdminPage} />
      </Router>
    </div>
  )
}
