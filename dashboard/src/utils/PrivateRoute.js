import React from 'react';
import {
  Redirect,
  Route
} from "react-router-dom";

import { userContext } from "../components/User";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      <userContext.Consumer>
        {(value) => value.isLogged ? <Component {...props} /> : <Redirect to='/login' />}
      </userContext.Consumer>
    )} />
  )
}
