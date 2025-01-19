import React from "react";
import "./CompanyPartners.css"; 

const CompanyPartners = ({ partners }) => {
  return (
    <div className="partners-container">
      <h3>Company Partners :</h3>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={`${partner.name} logo`} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPartners;
