import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div className="background-contact">
      <Navbar />

      <div className="contact-page">
        <div className="img-chair"></div>
        <div className="form-contact">
          <h2>Get in touch</h2>
          <form>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your full name"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
            />
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your Phone number" />
            <label>Message</label>
            <textarea name="message" placeholder="Enter your message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
