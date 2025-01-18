import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

const LocationSelector = () => {
  const [states, setStates] = useState([]); // To store state data
  const [cities, setCities] = useState([]); // To store city data
  const [selectedState, setSelectedState] = useState(""); // To track selected state

  useEffect(() => {
    // Set states for India by default
    const allStates = State.getStatesOfCountry("IN"); // Fetch states of India using its ISO code
    setStates(allStates);
  }, []);

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);

    // Fetch cities based on the selected state
    if (stateCode) {
      const allCities = City.getCitiesOfState("IN", stateCode); // India is hardcoded
      setCities(allCities);
    } else {
      setCities([]);
    }
  };

  return (
    <div>
      <h2>Select Location</h2>

      
      

      {/* State Dropdown */}
      <div>
        <label htmlFor="state">State: </label>
        <select id="state" onChange={handleStateChange}>
          <option value="">Select a State</option>
          {states.length > 0 ? (
            states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))
          ) : (
            <option value="">Loading States...</option>
          )}
        </select>
      </div>

      {/* City Dropdown */}
      <div>
        <label htmlFor="city">City: </label>
        <select id="city" disabled={!selectedState}>
          <option value="">Select a City</option>
          {cities.length > 0 ? (
            cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))
          ) : (
            <option value="">Select a state first</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default LocationSelector;
