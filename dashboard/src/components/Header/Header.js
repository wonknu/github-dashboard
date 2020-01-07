import React, { useState } from 'react';

import { Menu } from "../UI/Menu";
import { userContext, Login } from '../User';

const Header = (props) => {
  return (
    <div className="header">
      <userContext.Consumer>
        {(value) => (!value.isLogged ? <Login onLogin={value.loginUser} /> : <Menu />)}
      </userContext.Consumer>
    </div>
  );
};

export default Header;
