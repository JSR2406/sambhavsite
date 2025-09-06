import { useEffect, useRef, useState } from "react";
import "./landingpage.css";
import mainLogo from "../../assets/logo.png"; // ✅ adjust path if your logo is inside /assets
import loaderVideo from "../../assets/loader.mp4"; // ✅ adjust to your actual file

export default function Landingpage() {
  const videoRef = useRef(null);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => setShowMain(true);
    }
  }, []);

  const skipVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowMain(true);
  };

  return (
    <>
      {/* Loader Screen */}
      {!showMain && (
        <div id="loader">
          <video ref={videoRef} autoPlay muted>
            <source src={loaderVideo} type="video/mp4" />
          </video>
          <button id="skip-btn" onClick={skipVideo}>
            Skip
          </button>
        </div>
      )}

      {/* Main Content */}
      <div id="main-content" style={{ opacity: showMain ? 1 : 0 }}>
        <section className="content">
          <img src={mainLogo} alt="Main Logo" className="main-logo" />

          <div className="overlay-text">
            <h1 className="tagline">Your Tagline Here</h1>
            <p className="date">Event Date</p>
            <button className="cta-btn">Register Now</button>
          </div>
        </section>
      </div>
    </>
  );
}
