import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import "leaflet/dist/leaflet.css";
import { Country, State, City } from "country-state-city";

function W() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [state, set_state] = useState("");
  const [city, setcity] = useState("");
  const [pincode, set_Pincode] = useState("");
  const [min, set_Min] = useState("0");
  const [max, set_max] = useState("");
  const [area, set_area] = useState("");
  const mapRef = useRef(null);
  const [r, set_r] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 24.9748306, lng: 79.54356 });
  const [hoveredAddress, setHoveredAddress] = useState(""); // For storing address
  const [infoWindowVisible, setInfoWindowVisible] = useState(false); // For toggling InfoWindow visibility

  useEffect(() => {
    const allStates = State.getStatesOfCountry("IN");
    setStates(allStates);
  }, []);

  const handleStateChange = (e) => {
    const stateCode = e.target.value;

    if (stateCode) {
      const stateDetails = State.getStateByCodeAndCountry(stateCode, "IN");
      set_state(stateDetails.name);
      setSelectedState(stateCode);

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

  // Reverse geocode the marker's position
  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCZQ7QBcNicwveYO_z21CjV_zkhM8nNb7M`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0].formatted_address;
      }
      return "Address not found";
    } catch (error) {
      console.error("Error in reverse geocoding:", error);
      return "Error retrieving address";
    }
  };

  const handleMarkerHover = async () => {
    const address = await reverseGeocode(coordinates.lat, coordinates.lng);
    setHoveredAddress(address);
    setInfoWindowVisible(true);
  };

  const handleMarkerOut = () => {
    setInfoWindowVisible(false);
  };

  return (
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
        <select id="city" onChange={handleCityChange} disabled={!selectedState}>
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

      <textarea
        id="address"
        name="address"
        rows="3"
        value={area}
        onChange={(e) => {
          set_area(e.target.value);
        }}
        required
      ></textarea>

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
      <div>
        <p>distance range in meters</p>
        <input
          type="text"
          name="range"
          value={r}
          onChange={(e) => {
            set_r(e.target.value);
          }}
        />
      </div>

      <button>FILTER WITHIN THE RANGE</button>

      <LoadScript googleMapsApiKey="AIzaSyCZQ7QBcNicwveYO_z21CjV_zkhM8nNb7M">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "500px" }}
          center={coordinates}
          zoom={15}
          onLoad={(map) => (mapRef.current = map)}
        >
          {/* Add Marker */}
          <Marker
            position={coordinates}
            onMouseOver={handleMarkerHover}
            onMouseOut={handleMarkerOut}
          />
          {infoWindowVisible && (
            <InfoWindow position={coordinates} onCloseClick={() => setInfoWindowVisible(false)}>
              <div>{hoveredAddress}</div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default W;
