import React from 'react';
import './infocard.css'; // Assuming the CSS is in App.css

function App() {
  const handleCardClick = (url) => {
    window.open(url, '_blank'); // Opens the link in a new tab
  };

  return (
    <div className="infocontainer">
  {/* Left Half - Image Placeholder */}
  <div className="info-left">
    <img src="/whyaarvasa.png" alt="Why Aarvasa" />
  </div>

  {/* Right Half - 3 Columns */}
<div className="info-right">
  {/* Column 1 */}
  <div className="column">
    {/* Row 1 */}
    <div className="row">
      <div className="infocard">
        <img src="/image 192.png" alt="Comprehensive Consultancy" />
      </div>
      <div className="infocard">
        <img src="/image 194.png" alt="AR/VR Property" />
        <h3>AR/VR Property</h3>
      </div>
    </div>
    {/* Row 2 */}
    <div className="infocard">
      <img src="/image 195.png" alt="Blockchain-Backed Transaction" />
      <h3>Blockchain-Backed Transaction</h3>
    </div>
  </div>

  {/* Column 2 */}
  <div className="column">
    <div className="infocard">
      <img src="/image 196.png" alt="Monetization of Existing Properties" />
    </div>
  </div>

  {/* Column 3 */}
  <div className="column">
    <div className="infocard">
      <img src="/image 197.png" alt="Future Options" />
      <h3>Future Options</h3>
    </div>
  </div>
</div>
</div>

  );
}

export default App;
