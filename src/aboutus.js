import React from 'react';
import './aboutus.css';
import ReviewCard from "./reviewcard";
import CompanyPartners from "./CompanyPartners";

const AboutUs = () => {
    const milestones = [
        { month: 'May', description: 'Team Formation and Initial Planning' },
        { month: 'June', description: 'MVP Development Kickoff' },
        { month: 'July', description: 'Strategic Partnerships' },
        { month: 'August', description: 'MVP Testing Phase' },
        { month: 'September', description: 'Beta Launch with Core Features' },
        { month: 'October', description: 'Marketing and User Acquisition' },
    ];

    const partners = [
        { name: "Timeslotter pvt Ltd", logo: "path/to/timeslotter-logo.png" },
        { name: "PSAssociates", logo: "path/to/psassociates-logo.png" },
        { name: "Paramjyoti pvt Ltd", logo: "path/to/paramjyoti-logo.png" },
        { name: "Ealth technologies", logo: "path/to/ealthtechnologies-logo.png" },
        { name: "Softwave", logo: "path/to/softwave-logo.png" },
      ];

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
                    <button onClick={() => alert("Thank you for your interest! Please email us at contact@aarvasa.com or call us at +1 234 567 890.")}>
                        Contact Us
                    </button>
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

            {/* Milestones Section */}
            <section className="milestones">
                <h2>Milestones and Future Plans:</h2>
                <div className="timeline">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-month">{milestone.month}</div>
                            <div className="timeline-description">{milestone.description}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Team */}
      <div class="our-team">
      <h2>Our Team</h2>
      <div class="team-members">
          <div class="team-member">
              <div class="image-container">
                  <img src="/uday.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/udayprakashsahu/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="http://x.com/udaysahu_" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="http://instagram.com/uday.sahu_10" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="info-container">
                  <p class="name">Uday Prakash Sahu</p>
                  <p class="designation">Founder & CEO</p>
              </div>
          </div>
          <div class="team-member">
              <div class="image-container">
                  <img src="/ansh2.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/ansh-dubey-526325273/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://x.com/anshaarush?s=21" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/ansh.dubey/?igsh=MTR0ZGxxaHRkcHZsZw%3D%3D&utm_source=qr" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="info-container">
                  <p class="name">Ansh Dubey</p>
                  <p class="designation">Co-Founder & COO</p>
              </div>
          </div>
          <div class="team-member">
              <div class="image-container">
                  <img src="/lakshay.png" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/lakshya-phoolwani-44b807277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/lakshya._.47?igsh=ZDYybjRsM2VtaXJ1" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="info-container">
                  <p class="name">Lakshya Phoolwani</p>
                  <p class="designation">Chief Financial Officer (CFO)</p>
              </div>
          </div>
          <div class="team-member">
              <div class="image-container">
                  <img src="/archit.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/archit-agarwal03/" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://x.com/Bare14876127?s=09" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/archit_agarwal1511?igsh=MXNkcG9iM2k0bmZuaw==" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="info-container">
                  <p class="name">Archit Agrawal</p>
                  <p class="designation">Chief Marketing Officer (CMO)</p>
              </div>
          </div>
          <div class="team-member">
              <div class="image-container">
                  <img src="/anirudh.jpg" alt="Team Member Image" />
                  <div class="social-media-container">
                  <a href="https://www.linkedin.com/in/anirudh-saxena-481ba2245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-icon">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
          </div>
              </div>
              <div class="info-container">
                  <p class="name">Anirudh Saxena</p>
                  <p class="designation">Chief Technology Officer (CTO)</p>
              </div>
          </div>
          </div>
        </div>
            
            
                <h4 class="serWhatclients">What Our Clients Say</h4>
     <div class="serreviewcards">
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
     </div>

     <div classname ="division">
      <CompanyPartners partners={partners} />
    </div>

     <h4 class="serWhatclients">Contact Us:</h4>
    <section className="serconsultation">
                <div className="sercontent">
                    <div className="serimage">
                    <img src="/Services/scheduleconsulatance.png" alt="House Image" />
                    </div>
                    <div className="serform-container">
                    <form>
                        <label htmlFor="name">NAME</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                        
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                        
                        <label htmlFor="date">DATE</label>
                        <input type="date" id="date" required />
                        
                        <button type="submit">Scheduling A Consultation</button>
                    </form>
                    </div>
                </div>
                </section>
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
};

export default AboutUs;
