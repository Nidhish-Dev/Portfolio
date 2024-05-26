import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logon">
        <Link to="/">
          <img src="/Portfolio/nr.png" alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/Portfolio/main" className={location.pathname === '/Portfolio/main' ? 'active' : ''}>HOME</Link>
          </li>
          </ul>
      </div>
      <div className="right-it">
        <ul>
          {/* <li>
            <Link to="/Portfolio/main" className={location.pathname === '/Portfolio/main' ? 'active' : ''}>HOME</Link>
          </li> */}
          <li>
            <Link to="/Portfolio/about" className={location.pathname === '/Portfolio/about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to="/Portfolio/projects" className={location.pathname === '/Portfolio/projects' ? 'active' : ''}>Projects</Link>
          </li>
          <li>
            {/* <Link to="/Portfolio/contact" className={location.pathname === '/Portfolio/contact' ? 'active' : ''}> */}
              Contact
              {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
