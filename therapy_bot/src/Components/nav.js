// nav.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import logo from './Images/owlLogo.png';



const Navbar = () => {
  let navigate = useNavigate();
  const routeChangeHome = () => {
  let path = `/`;
  navigate(path);
}
  return (
    <div>
      <nav className="navbar">
        <div className="block" onClick={routeChangeHome}>
        <img src={logo} alt="logo" className='logo' />
        <div className="brand">
          HootAI
        </div>
        </div>
      
        <div className="links">
          <Link to="/" className="link" activeClassName="activeLink">
            Home
          </Link>
          <Link to="/notebook" className="link" activeClassName="activeLink">
            Notebook
          </Link>
          <Link to="/chat" className="link" activeClassName="activeLink">
            Chat
          </Link>
          <Link to="/quiz" className="link" activeClassName="activeLink">
            Quizzes
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
