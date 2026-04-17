import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} alt="BPS Property Logo" style={{ height: '50px', width: 'auto' }} />
        </Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/how-to-rent">How to Rent</NavLink>
          <NavLink to="/landlords">Landlords</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="nav-actions">
          <Link to="/admin" className="btn btn-outline">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
