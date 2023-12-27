import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Chair.</div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="links">
            Chairs
          </Link>
        </li>
        <li>
          <Link to="/about" className="links">
            About
          </Link>
        </li>
        <li className="nav-contact">
          <Link to="/contact" className="links contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
