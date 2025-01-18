import React from "react";
import "./listings.css";
import { useState } from "react";
import LocationSelector from "./Locationselector";
const Listing = () => {
  const [filters, setFilters] = useState({
    state: "all",
    city: "all",
    pincode: "",
    price: { min: "", max: "" }, // Updated to an object
    propertyType: "all",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target; // 'name' will be 'min' or 'max'
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [name]: value,
      },
    }));
  };
  

  const applyFilters = async () => {
    console.log("Filters applied:", filters);
    
    try {
      const response = await fetch('/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters), // Send the filter object as JSON
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log("Filtered data:", data);
        // Process the filtered data from API response if needed
      } else {
        console.error("Failed to apply filters");
      }
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  const properties = [
    { 
      id:1,
      name: "Risland Sky Mansion",
      location: "Chattarpur, New Delhi",
      price: "₹6.29 Cr - ₹7.79 Cr",
      type: "3 BHK | Ready to Move",
      certificatesLink: "#",
      amenitiesLink: "#",
      contactBuilder: "#",
      downloadBrochure: "#",
    },
      {id:2,
      name: "Risland Sky Mansion",
      location: "Chattarpur, New Delhi",
      price: "₹6.29 Cr - ₹7.79 Cr",
      type: "3 BHK | Ready to Move",
      certificatesLink: "#",
      amenitiesLink: "#",
      contactBuilder: "#",
      downloadBrochure: "#",
      },
      {id:3,
        name: "Risland Sky Mansion",
        location: "Chattarpur, New Delhi",
        price: "₹6.29 Cr - ₹7.79 Cr",
        type: "3 BHK | Ready to Move",
        certificatesLink: "#",
        amenitiesLink: "#",
        contactBuilder: "#",
        downloadBrochure: "#",
        },
        {id:4,
          name: "Risland Sky Mansion",
          location: "Chattarpur, New Delhi",
          price: "₹6.29 Cr - ₹7.79 Cr",
          type: "3 BHK | Ready to Move",
          certificatesLink: "#",
          amenitiesLink: "#",
          contactBuilder: "#",
          downloadBrochure: "#",
          },
          {id:5,
            name: "Risland Sky Mansion",
            location: "Chattarpur, New Delhi",
            price: "₹6.29 Cr - ₹7.79 Cr",
            type: "3 BHK | Ready to Move",
            certificatesLink: "#",
            amenitiesLink: "#",
            contactBuilder: "#",
            downloadBrochure: "#",
            }
    // Repeat or fetch properties dynamically
  ];
  const projects = [
      { 
        id:1,
        name: "Munish Homes",
        price: "₹22 Lac - ₹60 Lac",
        location: "Dwarka Mor",
        contactLink: "#",
      },
      { 
        id:2,
        name: "Munish Homes",
        price: "₹22 Lac - ₹60 Lac",
        location: "Dwarka Mor",
        contactLink: "#",
      },
      // Add more projects as needed
    ];
  return (
    <div className="property-listing-container">
      <h2>Top Projects in New Delhi</h2>
      <div className="filters">
  <h3>Filters</h3>
  <div className="filter-options">
      <LocationSelector/>

      <label htmlFor="pincode">Pincode:</label>
      <input
        type="text"
        id="pincode"
        name="pincode"
        value={filters.pincode}
        onChange={handleInputChange}
        placeholder="Enter Pincode"
      />

<label htmlFor="price-min">Price Range</label>
<div className="price-range">
  <input
    type="text"
    id="price-min"
    name="min"
    value={filters.price.min}
    onChange={handlePriceChange}
    placeholder="Min Price"
  />
  <span> - </span>
  <input
    type="text"
    id="price-max"
    name="max"
    value={filters.price.max}
    onChange={handlePriceChange}
    placeholder="Max Price"
  />
</div>

      

      <button className="apply-filters" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
</div>

      {properties.map((property, index) => (
        <div key={index} className="property-card">
          <img
            src="/mansion.jpeg" // Replace with actual image URLs
            alt={property.name}
            className="property-image"
          />
          <div className="property-details">
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>{property.type}</p>
          </div>
          <div className="middle-card">
           <div className="expert">
            <h2>EXPERT REVIEWS & ADVICE</h2>
            </div>
           <div className="property-actions">
            <div className="RERA">
              <h3>RERA Reports</h3>
              <p>Project certificates and legal approval</p>
            <a href={property.certificatesLink} className="certificates-link">
              View Certificates 
            </a>
            </div>
            <div className="amenti">
            <h3>Amenties</h3>
            <p>All 19 amenties in a project</p>
            <a href={property.amenitiesLink} className="amenities-link">
              View Amenities
            </a>
           </div>
           </div>
          </div>
          <div className="cta-buttons">
            <a href={property.contactBuilder} className="contact-builder">
              Contact Builder
            </a>
            <a href={property.downloadBrochure} className="download-brochure">
              Download Brochure
            </a>
          </div>
        </div>
      ))}
      <div className="projects-container">
      <h2>Explore Projects in New Delhi</h2>
      <div className="icons-row">
     <div className="icol"><div className="icon1"><span role="img" aria-label="Speaker">💸</span></div></div>
        <div className="icon"><span role="img" aria-label="buildings">🏢</span></div>
        <div className="icon"><span role="img" aria-label="star">⭐</span></div>
      </div>
      <div className="projects-row">
        {projects.map((project, index) => (
          <div key={index} className="projectl-card">
            <div className="projectl-image">
              {/* Replace with actual image source */}
              <img src="/img.jpeg" alt={project.name} />
            </div>
            <div className="projectl-details">
              <h3>{project.name}</h3>
              <p>{project.price}</p>
              <p>{project.location}</p>
              <a href={project.contactLink} className="contact-link">
                Contact Seller →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    {properties.map((property, index) => (
        <div key={index} className="property-card">
          <img
            src="/mansion.jpeg" // Replace with actual image URLs
            alt={property.name}
            className="property-image"
          />
          <div className="property-details">
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>{property.type}</p>
          </div>
          <div className="middle-card">
           <div className="expert">
            <h2>EXPERT REVIEWS & ADVICE</h2>
            </div>
           <div className="property-actions">
            <div className="RERA">
              <h3>RERA Reports</h3>
              <p>Project certificates and legal approval</p>
            <a href={property.certificatesLink} className="certificates-link">
              View Certificates 
            </a>
            </div>
            <div className="amenti">
            <h3>Amenties</h3>
            <p>All 19 amenties in a project</p>
            <a href={property.amenitiesLink} className="amenities-link">
              View Amenities
            </a>
           </div>
           </div>
          </div>
          <div className="cta-buttons">
            <a href={property.contactBuilder} className="contact-builder">
              Contact Builder
            </a>
            <a href={property.downloadBrochure} className="download-brochure">
              Download Brochure
            </a>
          </div>
        </div>
      ))}
      {properties.map((property, index) => (
        <div key={index} className="property-card">
          <img
            src="/mansion.jpeg" // Replace with actual image URLs
            alt={property.name}
            className="property-image"
          />
          <div className="property-details">
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>{property.type}</p>
          </div>
          <div className="middle-card">
           <div className="expert">
            <h2>EXPERT REVIEWS & ADVICE</h2>
            </div>
           <div className="property-actions">
            <div className="RERA">
              <h3>RERA Reports</h3>
              <p>Project certificates and legal approval</p>
            <a href={property.certificatesLink} className="certificates-link">
              View Certificates 
            </a>
            </div>
            <div className="amenti">
            <h3>Amenties</h3>
            <p>All 19 amenties in a project</p>
            <a href={property.amenitiesLink} className="amenities-link">
              View Amenities
            </a>
           </div>
           </div>
          </div>
          <div className="cta-buttons">
            <a href={property.contactBuilder} className="contact-builder">
              Contact Builder
            </a>
            <a href={property.downloadBrochure} className="download-brochure">
              Download Brochure
            </a>
          </div>
        </div>
      ))}
  
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
};



export default Listing;