import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul>
        <li className='nav-left'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav-right'>
          <Link to="/booklist">Booklist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
