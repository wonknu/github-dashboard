import React, {Component} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { userContext } from './components/User';
import { Header } from './components/Header';
import { History } from "./utils";

import { Profile } from './components/Profile';
import { Repos } from './components/Repos';
import { Gists } from './components/Gists';
import { PrivateRoute } from './utils/PrivateRoute';
import { Error404 } from './errorPages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLogged: false,
      isLoading: true
    };
  
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({user: {}, isLogged: false});
    History.push('/');
  }

  login(user) {
    const { profile, token } = user;
    this.setState({
      isLogged: true,
      user: {
        isLogged: true,
        profile,
        token
      }
    });
    History.push('/');
  }

  render() {
    const value = {
      user: this.state.user,
      logoutUser: this.logout,
      loginUser: this.login,
      isLogged: this.state.isLogged
    };

    return (
      <Router>
        <div>
          <userContext.Provider value={value}>
            <Header />
            <Switch>
              <PrivateRoute path='/repos' component={Repos} />
              <PrivateRoute path='/gists' component={Gists} />
              <PrivateRoute path='/' component={Profile} />
              <Route component={Error404} />
            </Switch>
          </userContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
