import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function S() {
    const navigate = useNavigate();
  // Define individual state variables for each form field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [roadNo, setRoadNo] = useState("");
  const [panCard, setPanCard] = useState("");

  // Handle input changes with separate update functions
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateFullName = (e) => setFullName(e.target.value);
  const updateContactNumber = (e) => setContactNumber(e.target.value);
  const updateCountryCode = (e) => setCountryCode(e.target.value);
  const updateAge = (e) => setAge(e.target.value);
  const updateArea = (e) => setArea(e.target.value);
  const updatePincode = (e) => setPincode(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateDistrict = (e) => setDistrict(e.target.value);
  const updateRoadNo = (e) => setRoadNo(e.target.value);
  const updatePanCard = (e) => setPanCard(e.target.value);

  const signup = async () => {
    // Gather form data into an object
    const data = {
      email,
      password,
      fullName,
      contactNumber,
      countryCode,
      age,
      area,
      pincode,
      state,
      district,
      roadNo,
      panCard,
    };

    console.log(data);

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {

        console.log("Signup successful:", result);
        navigate('/');

      } else {
        console.error("Signup failed:", result);
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  };

  return (
    <div>
      <h2>User Details Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={updateEmail}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={updatePassword}
            required
          />
        </label>
        <br />
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={updateFullName}
            required
          />
        </label>
        <br />
        <label>
          Contact No:
          <input
            type="text"
            value={contactNumber}
            onChange={updateContactNumber}
            required
          />
        </label>
        <br />
        <label>
          Country Code:
          <input
            type="text"
            value={countryCode}
            onChange={updateCountryCode}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={updateAge}
            required
          />
        </label>
        <br />
        <label>
          Area:
          <input
            type="text"
            value={area}
            onChange={updateArea}
            required
          />
        </label>
        <br />
        <label>
          Pincode:
          <input
            type="number"
            value={pincode}
            onChange={updatePincode}
            required
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={updateState}
            required
          />
        </label>
        <br />
        <label>
          District:
          <input
            type="text"
            value={district}
            onChange={updateDistrict}
            required
          />
        </label>
        <br />
        <label>
          Road No:
          <input
            type="text"
            value={roadNo}
            onChange={updateRoadNo}
            required
          />
        </label>
        <br />
        <label>
          PAN Card No:
          <input
            type="text"
            value={panCard}
            onChange={updatePanCard}
            required
          />
        </label>
        <br />
        <button onClick={signup}>Submit</button>
      </form>
    </div>
  );
}

export default S;
