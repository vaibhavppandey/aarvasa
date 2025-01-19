import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import "./listings.css";
import { useNavigate } from "react-router-dom";
const Listing = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [state, set_state] = useState("");
  const [city, setcity] = useState("");
  const [pincode, set_Pincode] = useState("");
  const [min, set_Min] = useState("0");
  const [max, set_max] = useState("");
  let [filtered_properties,set_filtered_properties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allStates = State.getStatesOfCountry("IN");
    setStates(allStates);
  }, []);

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
  
    if (stateCode) {
      const stateDetails = State.getStateByCodeAndCountry(stateCode, "IN"); // Get state details
      set_state(stateDetails.name); // Store full state name
      setSelectedState(stateCode);
  
      // Fetch cities for the selected state
      const allCities = City.getCitiesOfState("IN", stateCode);
      setCities(allCities);
    } else {
      set_state("");
      setSelectedState("");
      setCities([]);
    }
  };
  

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setcity(cityName);
  };

  const applyFilters = async () => {
    const filters = { state, city, pincode, min, max };
    console.log("Filters applied:", filters);

    try {
      const response = await fetch("http://localhost:8000/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      if (response.ok) {
        const data = await response.json();
        set_filtered_properties([...data]);
        console.log("Filtered data:", data);
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
          {/* State Dropdown */}
          <div>
            <label htmlFor="state">State: </label>
            <select id="state" onChange={handleStateChange}>
              <option value="">Select a State</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div>
            <label htmlFor="city">City: </label>
            <select
              id="city"
              onChange={handleCityChange}
              disabled={!selectedState}
            >
              <option value="">Select a City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pincode Input */}
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={pincode}
            onChange={(e) => set_Pincode(e.target.value)}
            placeholder="Enter Pincode"
          />

          {/* Price Range Inputs */}
          <label htmlFor="price-min">Price Range</label>
          <div className="price-range">
            <input
              type="text"
              id="price-min"
              name="min"
              value={min}
              onChange={(e) => set_Min(e.target.value)}
              placeholder="Min Price"
            />
            <span> - </span>
            <input
              type="text"
              id="price-max"
              name="max"
              value={max}
              onChange={(e) => set_max(e.target.value)}
              placeholder="Max Price"
            />
          </div>

          <button className="apply-filters" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </div>

      {
        filtered_properties.map((property, index)=>{
          return (
            <div key={index} className="property-card">
          <img
            src={property.uploadedMediaUrls[0]}
            alt=""
            className="property-image"
          />
          <div className="property-details">
            <h3>{property.city}</h3>
            <p>{property.state}</p>
            <p>{property.price}</p>
            <p>{property.size}</p>
            <p>{property.sqftPrice}</p>
            <p>{property.pincode}</p>
            <p>{property.addressDetails}</p>
          </div>
        </div>
          );

        })
      }

      <button onClick={()=>{
        navigate('/w');
      }}>click</button>

      {/* Properties Section */}
      {/*properties.map((property, index) => (
        <div key={index} className="property-card">
          <img
            src="/mansion.jpeg"
            alt={property.name}
            className="property-image"
          />
          <div className="property-details">
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>{property.type}</p>
          </div>
        </div>
      ))*/}
    </div>
  );
};

export default Listing;
