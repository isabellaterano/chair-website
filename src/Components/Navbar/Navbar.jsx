import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">Chair.</div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="links">
            Chairs
          </Link>
        </li>
        <li>
          <Link to="/about" className="links">
            About Us
          </Link>
        </li>
        <li className="nav-contact">
          <Link to="/contact" className="links contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="shop-cart">
        <img src="src\assets\shopping-car.svg" className="shopping-icon" />
        <span>0</span>
      </div>
    </nav>
  );
};

export default Navbar;
