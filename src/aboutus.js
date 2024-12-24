import React from "react";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="container">

      <main className="main-content">
        <section className="filters">
          <input type="text" placeholder="New Delhi | City / Locality / Project" />
          <button className="show-trends">Show Trends</button>
        </section>

        <section className="chart-section">
          <h2>Rates and Trends</h2>

          <div className="chart-container">
            <h3>Locality Average Price</h3>
            <div className="chart">
              {/* Add your chart library or image here */}
              <img src="/images/locality-price-chart.png" alt="Locality Average Price Chart" />
            </div>
            <p>
              In Bangalore, Developed localities take up the majority of the positions in the list of localities which
              have shown a high growth. Rachenahalli tops the list with 58.0% growth...
            </p>
          </div>

          <div className="chart-container">
            <h3>Locality Rental Yield</h3>
            <div className="chart">
              {/* Add your chart library or image here */}
              <img src="/images/locality-rental-yield.png" alt="Locality Rental Yield Chart" />
            </div>
            <p>
              Rental Yield represents annual return from renting your house in that locality. Rashtriya Vidyalaya Road
              tops the list with 11.0% growth...
            </p>
          </div>

          <div className="chart-container">
            <h3>Locality Demand</h3>
            <div className="chart">
              {/* Add your chart library or image here */}
              <img src="/images/locality-demand.png" alt="Locality Demand Chart" />
            </div>
            <p>
              Demand index represents change in locality demand keeping Jan'24 as base month. Phase 5 JP Nagar tops the
              list with 34.0% growth...
            </p>
          </div>
        </section>
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

export default Aboutus;
