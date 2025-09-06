import React, { useState } from "react";
import "./About.css";

export default function SambhavAbout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="logo.png" alt="Sambhav 3.0 Logo" />
        </div>
        <button
          className="menu-toggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" className="nav-blue">HOME</a></li>
          <li><a href="#about" className="nav-orange">ABOUT</a></li>
          <li><a href="#events" className="nav-blue">EVENTS</a></li>
          <li><a href="#leaderboard" className="nav-orange">LEADERBOARD</a></li>
          <li><a href="#contact" className="nav-blue">CONTACT</a></li>
        </ul>
      </nav>

      {/* Main About Section */}
      <main id="about">
        <div className="container">
          <h1 className="about-title">About</h1>
          <div className="sambhav">SAMBHAV 3.0</div>

          <section className="cards">
            {/* Vision */}
            <article className="card card--cyan">
              <h3 className="card-title cyan">The Vision</h3>
              <p>
                To become a pioneering platform that redefines the future of technology and innovation by
                uniting diverse minds, inspiring transformative ideas, and fostering meaningful connections.
                Sambhav 3.0 envisions a seamless collaboration between academia and industry, paving the way
                for sustainable progress and technological leadership.
              </p>
            </article>

            {/* Mission */}
            <article className="card card--orange">
              <h3 className="card-title orange">The Mission</h3>
              <p>
                To establish a vibrant and inclusive platform that drives innovation, fosters collaboration,
                and inspires creativity. Sambhav 3.0 bridges the gap between academia and industry through
                hands-on workshops, interactive sessions, and showcases of cutting-edge technologies. Our
                mission is to empower participants to unlock their full potential and prepare them to lead
                in a rapidly evolving technological world.
              </p>
            </article>
          </section>

          {/* Inspiration */}
          <section className="inspo" aria-label="Our Inspiration">
            <h4 className="heading">OUR INSPIRATION</h4>
            <div className="inspo-inner">
              <div className="inspo-left">
                <div className="inspo-photo">
                  <img src="vis.jpg" alt="Sir M. Visvesvaraya" />
                </div>
                <div className="inspo-name">M. Visvesvaraya</div>
              </div>

              <div className="inspo-divider" aria-hidden="true"></div>

              <div className="inspo-text">
                <p className="inspo-quote">
                  "Sambhav 3.0 draws inspiration from Sir M. Visvesvaraya, India's legendary engineer and statesman,
                  whose vision, discipline, and dedication laid the foundation for technological progress. His legacy
                  continues to inspire generations of engineers."
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
