import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">Chair.</div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className="links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="links">
            Chairs
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="links">
            About Us
          </NavLink>
        </li>
        <li className="nav-contact">
          <NavLink to="/contact" className="links contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="shop-cart">
        <Link to="/cart">
          <img src="src\assets\shopping-car.svg " className="shopping-icon" />
        </Link>
        <span>0</span>
      </div>
    </nav>
  );
};

export default Navbar;
