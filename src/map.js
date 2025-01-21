import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 40.7128, // Example: New York City
    lng: -74.006,
  };

  const coordinates = [
    { lat: 40.7128, lng: -74.006 },
    { lat: 40.73061, lng: -73.935242 },
  ]; // Add multiple markers if needed

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add markers to the map */}
        {coordinates.map((coord, index) => (
          <Marker key={index} position={coord} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
