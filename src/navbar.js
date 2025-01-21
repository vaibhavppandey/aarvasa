import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect } from "react";

const Navbar = ({i,k}) => {
    let [imgst,set_imgst] = useState(0);
    let [u_r_l,set_u_r_l] = useState("");

    useEffect(()=>{

        
        if(k==1){

            set_imgst(k);
            set_u_r_l(i);

        }

        


    },[i])

    if(imgst == 1){

        return (
            <header className="navbar">
                <div className="logon">
                    <Link to="/">
                        <img
                            src="/AarvasaL.png"
                            alt="Aarvasa Logo 1"
                            className="logon-image"
                        />
                    </Link>
                </div>
                <nav className="menu">
                    <div className="menu-container">
                        <Link to="/aboutus">About us</Link>
                        <Link to="/agents">Agents</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/PropertyListing">Listings</Link>
                        <a href="#" className="search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M14.77 12.27l4.22 4.22a1 1 0 0 1-1.41 1.41l-4.22-4.22a7.5 7.5 0 1 1 1.41-1.41zm-6.77 1.03a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#000" />
                            </svg>
                        </a>
                    </div>
                </nav>
                <div className="profnav">
                
                <img 
                    src={u_r_l} 
                    alt="Profile" 
                    width="30" 
                    height="30" 
                    style={{
                        objectFit: 'cover', 
                        borderRadius: '50%',
                        width: '40px', 
                        height: '40px'
                    }} 
                />
                
                </div>
                <button className="contact-btn">Contact us</button>
            </header>
           
        );

    }


    return (
        <header className="navbar">
            <div className="logon">
                <Link to="/">
                    <img
                        src="/AarvasaL.png"
                        alt="Aarvasa Logo 1"
                        className="logon-image"
                    />
                </Link>
            </div>
            <nav className="menu">
                <div className="menu-container">
                    <Link to="/aboutus">About us</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/listings">Listings</Link>
                    <a href="#" className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M14.77 12.27l4.22 4.22a1 1 0 0 1-1.41 1.41l-4.22-4.22a7.5 7.5 0 1 1 1.41-1.41zm-6.77 1.03a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#000" />
                        </svg>
                    </a>
                </div>
            </nav>
            <div className="profnav">
            <Link to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#007bff" />
                    <circle cx="12" cy="8" r="4" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <path d="M5.5 18.5a8.5 8.5 0 0 1 13 0" fill="none" stroke="#ffffff" strokeWidth="2" />
                </svg>
            </Link>
            </div>
            <Link to="/contactus">
            <button className="contact-btn">Contact us</button>
            </Link>
        </header>
       
    );
};

export default Navbar;