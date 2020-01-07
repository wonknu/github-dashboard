import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { userContext } from './components/User';
import { Header } from './components/Header';
import { History } from "./utils";

import { Loader } from './components/Loader';
import { Profile } from './components/Profile';
import { Repos } from './components/Repos';
import { Gists } from './components/Gists';
import { PrivateRoute } from './utils/PrivateRoute';
import { Error404 } from './errorPages';

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { CustomTheme } from "./theme";
import Api from './services';

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

  async login() {
    const user = await Api.getUser();
    this.setState({
      isLogged: true,
      user: {
        isLogged: true,
        isLoading: false,
        profile: user,
        token: localStorage.getItem('token')
      }
    }, () => History.push('/'));
    
  }

  render() {
    const token = localStorage.getItem('token');

    const value = {
      user: this.state.user,
      logoutUser: this.logout,
      loginUser: this.login,
      isLogged: this.state.isLogged,
      isLoading: this.state.isLoading
    };

    if (!this.state.isLogged && token) this.login();

    const LoaderComp = () => <Loader />;
    const AppComp = () => (
      <Router>
        <userContext.Provider value={value}>
          <Header />
          <Switch>
            <PrivateRoute path='/repos' component={Repos} />
            <PrivateRoute path='/gists' component={Gists} />
            <PrivateRoute path='/' component={Profile} />
            <Route component={Error404} />
          </Switch>
        </userContext.Provider>
      </Router>
    );

    return (
      <ThemeProvider theme={CustomTheme}>
        <CSSReset />
        {!this.state.isLogged && token ? <LoaderComp /> : <AppComp />}
      </ThemeProvider>
    );
  }
}

export default App;
