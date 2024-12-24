import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="containerl">

      {/* Login Section */}
      <main className="main-content">
        <div classname="loginwith-block">
        <div className="login-container">
          <div className="social-login">
            <button className="facebook">Log in using Facebook</button>
            <button className="google">Log in using Google</button>
            <button className="apple">Sign in with Apple</button>
          </div>
          <p>or login with Email</p>
          <form>
            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="submit-btn">Log In</button>
          </form>
          <p>
            New account: <a href="#">Sign up</a>
          </p>
        </div>
        <strong className="view-policy1">By signing up for Aarvasa, you agree to the Terms of Service.<br></br></strong>
        <strong className="view-policy">View our Privacy Policy</strong>
        
        </div>
        {/* Logo and Tagline */}
        <div className="logo-section">
          <img src="/ARVA-removebg-preview 2.png"></img>          
          <h1>AARVASA</h1>
          <p className="for-mob">BUILDING DREAMS,<div>SECURING FUTURES.</div> </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>
            <span className="time">Time</span>
            <span className="slotter">Slotter</span>
          </h3>
          <p>Revolutionize scheduling with TimeSlotter.</p>
          <div className="social-icons">
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
        <div className="footer-section">
          <h3 className="underlined">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="underlined">Privacy & Terms</h3>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund and Cancellation Policy</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="underlined">Contact Us</h3>
          <p>Technology Tower, VIT Vellore</p>
          <p>Room No. 004, Ground Floor</p>
          <p>Vellore, Tamil Nadu, 632014</p>
          <p>Email: timeslotter@outlook.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;