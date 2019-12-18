import React, { useState } from 'react';
import Contact from '../contactForm/Contact';
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

          <a href='https://gitHub.com/sbugarski86' className='links'>
            Github
          </a>
        </div>
      </nav>
      <div className='toggleContainer'>
        <div className={'collapse' + (collapse ? 'in' : '')}>
          <Contact />

          <a href='https://gitHub.com/sbugarski86' className='links'>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarFunc;
