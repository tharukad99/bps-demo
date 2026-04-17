import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="logo" style={{ color: '#fff', marginBottom: '20px', display: 'flex' }}>
              <img src={logo} alt="BPS Property Logo" style={{ height: '60px', width: 'auto', background: 'white', padding: '5px', borderRadius: '4px' }} />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginTop: '15px' }}>
              Premium property rental and lettings company serving the UK. We provide trustworthy, modern, and minimal real estate services.
            </p>
          </div>
          
          <div className="footer-links-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/properties">Properties</Link>
              <Link to="/about">About Us</Link>
              <Link to="/how-to-rent">How to Rent</Link>
              <Link to="/landlords">Landlords / Investors</Link>
            </div>
          </div>
          
          <div className="footer-links-section">
            <h3>Company</h3>
            <div className="footer-links">
              <Link to="/contact">Contact</Link>
              <Link to="/admin">Admin Portal</Link>
            </div>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><Phone size={18} /> +44 20 7946 0958</p>
            <p><Mail size={18} /> enquiries@bpsproperty.co.uk</p>
            <p><MapPin size={18} /> 123 Property Lane, London, UK</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BPS Property. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
