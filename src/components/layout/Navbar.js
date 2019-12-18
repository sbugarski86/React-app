import React, { useState } from 'react';
import Contact from '../contactForm/Contact';
import { Collapse } from 'reactstrap';

const NavbarFunc = props => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  return (
    <div>
      <nav className='navbarStyle'>
        <h3>My Todo App</h3>
        <div>
          <i onClick={toggle} className='toggleButton fa fa-bars' />
        </div>
        <div className='navbarLinks'>
          <Contact />

          <a href='https://gitHub.com/sbugarski86' className='link'>
            Github
          </a>
        </div>
      </nav>
      <div className='toggleContainer'>
        <Collapse isOpen={collapse}>
          <Contact />

          <a href='https://gitHub.com/sbugarski86'>
            Github
          </a>
        </Collapse>
      </div>
    </div>
  );
};

export default NavbarFunc;
