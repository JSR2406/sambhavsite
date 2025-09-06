import React from "react";
import "./leaderboard.css";

const Leaderboard = () => {
  return (
    <div className="leaderboard-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="logo.png" alt="Sambhav 3.0 Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="nav-blue">HOME</a></li>
          <li><a href="#about" className="nav-orange">ABOUT</a></li>
          <li><a href="#events" className="nav-blue">EVENTS</a></li>
          <li><a href="#leaderboard" className="nav-orange">LEADERBOARD</a></li>
          <li><a href="#contact" className="nav-blue">CONTACT</a></li>
        </ul>
      </nav>

      {/* Title */}
      <h1 className="page-title">Participating Departments</h1>

      {/* Background icons */}
      <img src="icons/RoboticArm.png" alt="robotic arm" className="icon orange robot-arm" />
      <img src="icons/Gear1.png" alt="GearIcon" className="icon orange gear1" />
      <img src="icons/Gear2.png" alt="GearIcon" className="icon cyan gear2" />
      <img src="icons/AIChip.png" alt="AICHip" className="icon cyan ai-chip" />
      <img src="icons/CPUChip.png" alt="CPUChip" className="icon orange cpu-chip" />
      <img src="icons/Gear3.png" alt="GearIcon" className="icon orange gear3" />

      {/* Department Container */}
      <div className="container">
        {[
          { tag: "CSE", icon: "cse.png", name: "Computer Science & Engineering" },
          { tag: "IT", icon: "it.png", name: "Information Technology" },
          { tag: "AI-DS", icon: "aids.png", name: "Artificial Intelligence & Data Science" },
          { tag: "E&TC", icon: "entc.png", name: "Electronics & Telecommunication" },
          { tag: "CIVIL", icon: "civil.png", name: "Civil Engineering" },
          { tag: "MECH", icon: "mech.png", name: "Mechanical Engineering" },
          { tag: "INSTRU", icon: "instru.png", name: "Instrumentation Engineering" },
          { tag: "R&A", icon: "rna.png", name: "Robotics & Automation" },
        ].map((dept, index) => (
          <div className="dept" key={index}>
            <div className="dept-left">
              <div className="tag">{dept.tag}</div>
              <span>
                <img className="symbol" src={`icons/${dept.icon}`} alt={dept.tag} />
              </span>
              <div className="dept-name">{dept.name}</div>
            </div>
            <div className="status">Participating</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
