import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>jIntro - Free Viral Traffic</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active">Create jIntro </NavLink>
    <NavLink to="/help" activeClassName="is-active">Help </NavLink>
  </header>
);

export default Header;