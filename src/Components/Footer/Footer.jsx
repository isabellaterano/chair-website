import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer-contact">
        <h1>Chair.</h1>
        <p>elevate your lifestyle.</p>
        <div className="social-media">
          <a href="#">
            <img
              src="src\assets\logo-facebook.svg"
              className="social-logo facebook"
            />
          </a>
          <a href="#">
            <img
              src="src\assets\logo-instagram.svg"
              className="social-logo instagram"
            />
          </a>
          <a href="#">
            <img
              src="src\assets\logo-pinterest.svg"
              className="social-logo pinterest"
            />
          </a>
        </div>
      </div>

      <div className="subscribe">
        <h4>Subscribe to our Newsletter</h4>
        <div className="send">
          <input type="email" id="email" placeholder="example@email.com" />
          <button>
            <img src="src\assets\mail.svg" />
          </button>
        </div>
      </div>

      <div className="links">
        <h4>Links</h4>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Stores</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>&copy; Copyright 2023 Chair. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
