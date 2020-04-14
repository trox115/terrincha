import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../logo.png';

const Header = ({ ...props }) => {
  const activeStyle = { color: '#9A272E' };
  const history = useHistory();

  const [count, setCount] = useState(0);
  console.log(props);
  function req(event) {
    event.preventDefault();
    if (count === 7) {
      history.push('/checkin');
    } else {
      setCount(count + 1);
    }
  }
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
            <p
              to="#"
              className="nav-link"
              activeStyle={activeStyle}
              exact
              onClick={req}
            >
              Checkout
            </p>
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
