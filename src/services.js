import React from "react";
import "./services.css"; // CSS file for styling

const Services = () => {
  return (
    <div className="services-page">
      {/* Header Section */}
      <header className="listing-header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src="/logo.png" alt="Aarvasa Logo" />
            <span>AARVASA</span>
          </div>
          {/* Navigation Links */}
          <nav className="navigation">
            <a href="/about">About us</a>
            <a href="/agents">Agents</a>
            <a href="/services" className="active">
              Services
            </a>
            <a href="/listings">Listings</a>
          </nav>
          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>
              <img src="/search-icon.png" alt="Search" />
            </button>
          </div>
          {/* Contact Button */}
          <button className="contact-button">Contact us</button>
        </div>
      </header>

      {/* Services Content */}
      <main className="services-content">
        <h1>Our Services</h1>
        <p>
          Explore the best services we offer to help you find your dream
          property or maximize the potential of your current assets.
        </p>
        <div className="services-list">
          <div className="service-card">
            <h2>Service 1</h2>
            <p>Details about Service 1...</p>
          </div>
          <div className="service-card">
            <h2>Service 2</h2>
            <p>Details about Service 2...</p>
          </div>
          <div className="service-card">
            <h2>Service 3</h2>
            <p>Details about Service 3...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
