import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">Kuldeep Umaraiya</Link>
        <nav className="desktop-nav">
          <Link to="/about" className="nav-link">About</Link>
          <a href="/#projects" className="nav-link">Projects</a>
          <a href="/#resume" className="nav-link">CV</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
