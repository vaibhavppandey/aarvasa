import React from "react";
import "./contactus.css"

const ContactUs = () => {
    return (
        <div>
            <div>
                <h4 class="serWhatclients">Contact Us:</h4>
            </div>
            <section className="serconsultation">\
                <div className="sercontent">
                    <div className="serimage">
                        <img src="/Services/scheduleconsulatance.png" alt="House Image" />
                    </div>
                    <div className="serform-container">
                        <form>
                            <label htmlFor="name">NAME</label>
                            <input type="text" id="name" placeholder="Enter your name" required />

                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="email" id="email" placeholder="Enter your email" required />

                            <label htmlFor="date">DATE</label>
                            <input type="date" id="date" required />

                            <button type="submit">Scheduling A Consultation</button>
                        </form>
                    </div>
                </div>
            </section>
            {/*Footer*/}
      <footer className="footerapp">
  <div className="footerapp-section">
    <div className="logon">
      <div className="oval-bg">
        <img
          src="/AarvasaL.png"
          alt="Aarvasa Logo 1"
          className="logon-image"
        />
      </div>
    </div>
    <p>Building Dreams , Securing Futures</p>
    <div className="appsocial-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Quick Links</h3>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Our Team</li>
    </ul>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Privacy & Terms</h3>
    <ul>
      <li>Terms and Conditions</li>
      <li>Privacy Policy</li>
      <li>Refund and Cancellation Policy</li>
      <li>Security</li>
    </ul>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Contact Us</h3>
    <p>Technology Tower, VIT Vellore</p>
    <p>Room No. 004, Ground Floor</p>
    <p>Vellore, Tamil Nadu, 632014</p>
    <p>Email: theaarvasa@gmail.com</p>
  </div>

</footer>

        </div>
    );
}

export default ContactUs;