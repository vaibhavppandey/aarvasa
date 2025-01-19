import React from "react";
import "./contactus.css"

const ContactUs = () => {
    return (
        
        <section className="serconsultation">
            <h4 class="serWhatclients">Contact Us:</h4>
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
        
    );
}

export default ContactUs;