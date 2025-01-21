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
    <div className="form-container">
  <h2>User Details Form</h2>
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="form-group">
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={updateEmail}
        required
      />
    </div>

    <div className="form-group">
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={updatePassword}
        required
      />
    </div>

    <div className="form-group">
      <label>Full Name:</label>
      <input
        type="text"
        value={fullName}
        onChange={updateFullName}
        required
      />
    </div>

    <div className="form-group">
      <label>Contact No:</label>
      <input
        type="text"
        value={contactNumber}
        onChange={updateContactNumber}
        required
      />
    </div>

    <div className="form-group">
      <label>Country Code:</label>
      <input
        type="text"
        value={countryCode}
        onChange={updateCountryCode}
        required
      />
    </div>

    <div className="form-group">
      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={updateAge}
        required
      />
    </div>

    <div className="form-group">
      <label>Area:</label>
      <input
        type="text"
        value={area}
        onChange={updateArea}
        required
      />
    </div>

    <div className="form-group">
      <label>Pincode:</label>
      <input
        type="number"
        value={pincode}
        onChange={updatePincode}
        required
      />
    </div>

    <div className="form-group">
      <label>State:</label>
      <input
        type="text"
        value={state}
        onChange={updateState}
        required
      />
    </div>

    <div className="form-group">
      <label>District:</label>
      <input
        type="text"
        value={district}
        onChange={updateDistrict}
        required
      />
    </div>

    <div className="form-group">
      <label>Road No:</label>
      <input
        type="text"
        value={roadNo}
        onChange={updateRoadNo}
        required
      />
    </div>

    <div className="form-group">
      <label>PAN Card No:</label>
      <input
        type="text"
        value={panCard}
        onChange={updatePanCard}
        required
      />
    </div>

    <button className="submit-btn" onClick={signup}>Submit</button>
  </form>
      {/*Footer*/}
      <footer className="footerapp">
  <div className="footerapp-section">
    <div className="logon">
      <div className="oval-bg">
        <img
          src="/AarvasaL.png"
          alt="Aarvasa Logo 1"
          className="logon-image"
        />
      </div>
    </div>
    <p>Building Dreams , Securing Futures</p>
    <div className="appsocial-icons">
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
  <div className="footerapp-section">
    <h3 className="underlinedapp">Quick Links</h3>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Our Team</li>
    </ul>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Privacy & Terms</h3>
    <ul>
      <li>Terms and Conditions</li>
      <li>Privacy Policy</li>
      <li>Refund and Cancellation Policy</li>
      <li>Security</li>
    </ul>
  </div>
  <div className="footerapp-section">
    <h3 className="underlinedapp">Contact Us</h3>
    <p>Technology Tower, VIT Vellore</p>
    <p>Room No. 004, Ground Floor</p>
    <p>Vellore, Tamil Nadu, 632014</p>
    <p>Email: theaarvasa@gmail.com</p>
  </div>

</footer>
    </div>
    
  );
}

export default S;
