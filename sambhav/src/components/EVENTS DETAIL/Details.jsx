import React, { useState } from "react";
import "./Details.css";

export default function EventPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="event-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="icons/logo.png" alt="Sambhav 3.0 Logo" />
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className="nav-blue" onClick={closeMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="nav-orange" onClick={closeMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#events" className="nav-blue" onClick={closeMenu}>
              EVENTS
            </a>
          </li>
          <li>
            <a href="#leaderboard" className="nav-orange" onClick={closeMenu}>
              LEADERBOARD
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-blue" onClick={closeMenu}>
              CONTACT
            </a>
          </li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </nav>

      {/* Icons */}
      <img src="icons/brain_orange.png" alt="brain" className="icon brain_orange orange" />
      <img src="icons/brain_blue.png" alt="brain" className="icon brain_blue blue" />
      <img src="icons/rocket.png" alt="rocket" className="icon rocket orange" />
      <img src="icons/gear_orange.png" alt="gear" className="icon gear_orange orange" />
      <img src="icons/gear_blue.png" alt="gear" className="icon gear_blue blue" />
      <img src="icons/robotic_arm.png" alt="robotic arm" className="icon robotic_arm blue" />
      <img src="icons/ring.png" alt="ring" className="icon ring orange" />
      <img src="icons/open_bracket.png" alt="open bracket" className="icon open_bracket orange" />
      <img src="icons/closed_bracket.png" alt="closed bracket" className="icon closed_bracket orange" />

      {/* Content */}
      <div className="container container-grid">
        {/* Left Side (Fest Poster) */}
        <div className="left-panel">
          <img src="image.png" alt="Event Poster" />
        </div>

        {/* Right Side (Details) */}
        <div className="right-panel">
          <div className="block">
            <h2>Description</h2>
            <p>
              The KHOJ project idea pitching event is designed to give students
              an opportunity to showcase their innovative project ideas to a
              panel of judges. The main objective of this competition is to
              highlight the students' technical proficiency, creativity, and
              problem-solving capabilities and provide them with a platform to
              receive feedback and recognition for their hard work.
            </p>
          </div>

          <div className="info-row">
            <div className="info-block">
              <h3>Teams</h3>
              <p>Individual</p>
            </div>
            <div className="info-block">
              <h3>Fees</h3>
              <p>Free</p>
            </div>
          </div>

          <div className="block">
            <h2>Prize</h2>
            <ul>
              <li>1st Prize: ₹77,000</li>
              <li>2nd Prize: ₹75,000</li>
              <li>3rd Prize: ₹73,000</li>
            </ul>
          </div>

          <div className="block">
            <h2>Rules & Regulations</h2>
            <p>
              An ideal team size would consist of a minimum of 2 and a maximum
              of 4 individuals. Individuals from diverse departments are
              eligible for participation within the team.
            </p>
          </div>

          <div className="info-row">
            <div className="info-block">
              <h3>Location</h3>
              <p>TBD</p>
            </div>
            <div className="info-block">
              <h3>Date & Time</h3>
              <p>TBD</p>
            </div>
          </div>

          <div className="btn">
            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
