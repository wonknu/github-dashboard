import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../User';

const Menu = (props) => {
  return (
    <userContext.Consumer>
      {(value) =>
        <ul>
          <li>
            <Link to="/">Profil</Link>
          </li>
          <li>
            <Link to="/repos">Repos</Link>
          </li>
          <li>
            <Link to="/gists">Gists</Link>
          </li>
          <li>
            <span onClick={value.logoutUser}>Logout</span>
          </li>
        </ul>
      }
    </userContext.Consumer>
  );
};

export default Menu;