import React, { useState } from 'react';
import Contact from '../contactForm/Contact';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavbarFunc = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = (e) =>{
    e.preventDefault();
    setCollapsed(!collapsed);}

  return (
    <div>
      <Navbar color='primary' dark>
        <NavbarBrand href='/' className='mr-auto'>
          My Todo App
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Contact />
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarFunc;
