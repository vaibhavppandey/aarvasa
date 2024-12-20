import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img
            src="/Aarvasa_Logo-removebg 3(2).png"
            alt="Aarvasa Logo 1"
            className="logo-image"
          />
          <img
            src="/Aarvasa_Logo-removebg 2.png"
            alt="Aarvasa Logo 2"
            className="logo-image"
          />
        </div>
        <nav className="menu">
          <a href="#">About us</a>
          <a href="#">Agents</a>
          <a href="#">Services</a>
          <a href="#">Listings</a>
          <a href="#"></a>
        </nav>
        <button className="contact-btn">Contact us</button>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1>Welcome to Aarvasa</h1>
          <p>Manage Your Property</p>
          <p>
            Your dream home is just a search away. Supermarkets, buses,
            stations, and more—all nearby!
          </p>
          <div className="search-bar">
            <input type="text" placeholder="New Delhi" />
            <input type="text" placeholder="Flat +1" />
            <input type="text" placeholder="Budget" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Final ii 1.png" alt="Hero Image" />
        </div>
      </main>

      {/* USP Section */}
      <section className="usp">
        <h2>We’ve got properties for everyone</h2>
        <div className="usp-stats">
          <div>1022<br />Owner Properties</div>
          <div>182<br />Projects</div>
          <div>2364<br />Ready to move-in</div>
          <div>3222<br />Budget Homes</div>
        </div>
      </section>

      {/* Preferred Agents */}
      <section className="agents">
        <h2>Aarvasa Preferred Agents in New Delhi</h2>
        <div className="agent-list">
          <div className="agent-card">Vivek Kumar Mishra</div>
          <div className="agent-card">Vivek Kumar Mishra</div>
          <div className="agent-card">Vivek Kumar Mishra</div>
          <div className="agent-card">Vivek Kumar Mishra</div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="projects">
        <h2>Our Recent Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Sobha Heartland II Villas</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>
            <span>4.83</span>
          </div>
          <div className="project-card">
            <h3>Sobha Heartland II Villas</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>
            <span>4.83</span>
          </div>
          <div className="project-card">
            <h3>Sobha Heartland II Villas</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>
            <span>4.83</span>
          </div>
        </div>
      </section>

      {/* Tools and Advice */}
      <section className="tools-advice">
        <h2>Advice & Tools</h2>
        <div className="tools">
          <div className="tool-card">ROI</div>
          <div className="tool-card">View Now</div>
          <div className="tool-card">Watch Video</div>
          <div className="tool-card">Read More</div>
        </div>
      </section>

      <div class="post-property-container">
    <div class="left-side">
        <p>Post your property for free</p>
        <p>List it on Aarvasa and get Genuine leads</p>
    </div>
    <div class="right-side">
        <button class="post-property-btn">
            Post Property
            <button class="free-btn">Free</button>
        </button>
    </div>
</div>

      <div class="our-team">
      <h2>Our Team</h2>
    <div class="team-members">
        <div class="team-member">
            <div class="image-container">
                <img src="path_to_image.jpg" alt="Team Member Image" />
            </div>
            <div class="info-container">
                <p class="name">Uday Prakash Sahu</p>
                <p class="designation">Founder & CEO</p>
            </div>
        </div>
        <div class="team-member">
            <div class="image-container">
                <img src="path_to_image.jpg" alt="Team Member Image" />
            </div>
            <div class="info-container">
                <p class="name">Ansh Dubey</p>
                <p class="designation">Co-Founder & COO</p>
            </div>
        </div>
        <div class="team-member">
            <div class="image-container">
                <img src="path_to_image.jpg" alt="Team Member Image" />
            </div>
            <div class="info-container">
                <p class="name">Lakshya Phoolwani</p>
                <p class="designation">Chief Financial Officer (CFO)</p>
            </div>
        </div>
        <div class="team-member">
            <div class="image-container">
                <img src="path_to_image.jpg" alt="Team Member Image" />
            </div>
            <div class="info-container">
                <p class="name">Archit Agrawal</p>
                <p class="designation">Chief Marketing Officer (CMO)</p>
            </div>
        </div>
    </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093745!2d144.95373531535934!3d-37.816279442021246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1603104563980!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      {/* Newsletter Section */}
      <section className="newsletter">
      <div class="content">
        <div class="text">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates, news, and offers directly in your inbox. Don't miss out on exclusive deals!</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div class="image">
          <img src="/3d-rendering-isometric-fdgdf 1.png" alt="Newsletter Image" />
        </div>
      </div>
      </section>

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

export default App;
