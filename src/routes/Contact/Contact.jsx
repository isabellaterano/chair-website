import "./Contact.css";

const Contact = () => {
  return (
    <div className="background-contact">
      <div className="contact-page">
        <div className="container">
          <div className="text">Contact us </div>
          <form>
            <div className="form-row">
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>First Name</label>
              </div>
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Email Address</label>
              </div>
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Phone Number</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea rows="8" cols="80" required></textarea>
                <br />
                <div className="underline"></div>
                <label>Write your message</label>
                <br />
                <div className="form-row submit-btn">
                  <div className="input-data">
                    <div className="inner"></div>
                    <input type="submit" value="submit" className="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
