import React from 'react';
import './aboutus.css';

const AboutUs = () => {
    return (
        <div className="about-section">
            <h1>Who We Are :</h1>
            <div className="about-content">
                <img src="_0001.png" alt="Character" className="character-img" />
                <p>
                    <strong>So We Are Aarvasa</strong>, we are more than just real estate professionals — we are your 
                    partners in creating a better future. With a passion for helping individuals and families find 
                    their dream homes, we combine expertise, integrity, and innovation to deliver exceptional results. 
                    Our team consists of seasoned professionals with deep roots in the community and a comprehensive 
                    understanding of the real estate market. Whether you're buying your first home, upgrading to a 
                    larger space, or investing in properties, we are dedicated to guiding you every step of the way.
                </p>
            </div>
            <h2>"Connecting People with Perfect Properties and Smart Investments"</h2>
            <div className="mission-vision">
                <div className="card">
                    <h3>Our Mission</h3>
                    <p>
                        "To democratize real estate investments by offering innovative solutions like flexible payment 
                        plans, AR/VR property tours, and eco-conscious property insights, while providing a seamless 
                        experience for buyers, sellers, and renters to maximize their returns and achieve financial 
                        independence."
                    </p>
                </div>
                <div className="card">
                    <h3>Aarvasa</h3>
                    <p>Simplifies Real Estate with Seamless Transactions, Investments, and Property Monetization</p>
                    <button>Contact Us</button>
                </div>
                <div className="card">
                    <h3>Our Vision</h3>
                    <p>
                        "To revolutionize real estate accessibility by creating a one-stop platform that empowers 
                        individuals to invest, lease, and manage properties effortlessly while fostering financial 
                        growth and sustainability."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
