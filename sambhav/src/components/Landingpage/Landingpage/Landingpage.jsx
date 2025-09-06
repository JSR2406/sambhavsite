import { useEffect, useRef, useState } from "react";
import "./landingpage.css"; // move CSS here for cleaner JSX

export default function App() {
  const videoRef = useRef(null);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.onended = () => {
        setShowMain(true);
      };
    }
  }, []);

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowMain(true);
  };

  return (
    <div className="app">
      {/* Loader Section */}
      {!showMain && (
        <div id="loader">
          <video autoPlay muted playsInline ref={videoRef} id="loadingvideo">
            <source src="assets/loadingvideo.mp4" type="video/mp4" />
          </video>
          <button id="skip-btn" onClick={handleSkip}>
            Skip
          </button>
        </div>
      )}

      {/* Main Content */}
      {showMain && (
        <div id="main-content" style={{ opacity: showMain ? 1 : 0 }}>
          <div id="tsparticles"></div>

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

          {/* Hero Section */}
          <section className="content">
            <img
              src="assets/sambhav-logo.png"
              alt="Sambhav 3.0 Main Logo"
              className="main-logo"
            />
            <div className="overlay-text">
              <h2 className="tagline">Creating Future Endeavours</h2>
              <p className="date">September 15 – 16, 2025</p>
              <button className="cta-btn">Explore Our Events</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
