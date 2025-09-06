import React from "react";
import "./contact.css"; // keep your existing styles

function ContactPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="assets/sambhav-logo.png" alt="Sambhav 3.0 Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-blue">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="nav-orange">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#events" className="nav-blue">
              EVENTS
            </a>
          </li>
          <li>
            <a href="#leaderboard" className="nav-orange">
              LEADERBOARD
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-blue">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="contact-page">
        <div className="title-container">
          <h1>Get In Touch</h1>
          <div className="underline"></div>
        </div>

        <div className="main-content">
          {/* Left Section: Interactive Map */}
          <div className="map-container">
            <iframe
              className="interactive-map"
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.4301335399616!2d73.75833525715554!3d18.64536930625651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1756995498512!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Right Section: Contact Info */}
          <div className="contact-info-container">
            <div className="contact-info">
              <h2>CONTACT US</h2>
              <div className="info-item">
                <i className="ph ph-map-pin icon"></i>
                <span>D.Y. Patil College of Engineering, Pune</span>
              </div>
              <div className="info-item">
                <i className="ph ph-phone icon"></i>
                <span>+91 7447819903</span>
              </div>
              <div className="info-item">
                <i className="ph ph-envelope-simple icon"></i>
                <span>sambhavdypcoeoffficial@gmail.com</span>
              </div>
            </div>
            <div className="contact-button-container">
              <a
                href="mailto:sambhavdypcoeoffficial@gmail.com"
                className="contact-button">
                Contact Here
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col footer-col-left">
            <div className="footer-logo">
              <img src="assets/sambhav-logo.png" alt="Sambhav 3.0 Logo" />
            </div>
            <p>
              Sambhav'25 is One of the Largest Technical festival of Pune. Let's
              make a Tech move.
            </p>
          </div>
          <div className="footer-col footer-col-right">
            <h3>OUR SOCIAL MEDIA HANDLES</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer">
                <i className="ph ph-instagram-logo social-icon"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer">
                <i className="ph ph-linkedin-logo social-icon"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <i className="ph ph-twitter-logo social-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
