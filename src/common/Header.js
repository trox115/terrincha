import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.png';

const Header = () => {
  const activeStyle = { color: '#9A272E' };

  return (
    <Navbar
      id="mynav"
      collapseOnSelect
      expand="xl"
      className="navbar-light bg-light"
    >
      <NavLink to="/" className="navbar-brand" activeStyle={activeStyle} exact>
        <img src={logo} alt="logo-terrincha" />
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink
              to="/"
              className="nav-link"
              activeStyle={activeStyle}
              exact
            >
              Checkout
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/idioma" className="nav-link" exact>
              Idioma
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
