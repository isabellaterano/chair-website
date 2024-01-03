import "./Footer.css";
import mail from "../../assets/mail.svg";

const Footer = () => {
  return (
    <footer>
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
              <img src={mail} className="img-button" />
            </button>
          </div>
        </div>

        <div className="links">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>&copy; Copyright 2023 Chair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
