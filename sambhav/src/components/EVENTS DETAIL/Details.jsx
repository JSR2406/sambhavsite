import React from "react";
import { useParams, Link } from "react-router-dom";
import "./EventDetails.css";

export default function EventDetails() {
  const { id } = useParams();

  // Dummy event data (replace with real API later if needed)
  const events = [
    {
      id: "1",
      title: "Hackathon",
      description: "A 24-hour coding sprint where teams build innovative solutions.",
      rules: ["Team size: 2-4", "Time limit: 24 hours", "Original ideas only"],
      prize: "₹50,000",
    },
    {
      id: "2",
      title: "Robotics Challenge",
      description: "Showcase your robotics skills in this exciting competition.",
      rules: ["Max 3 members per team", "Robots must be autonomous", "Weight limit: 5kg"],
      prize: "₹30,000",
    },
    {
      id: "3",
      title: "AI Workshop",
      description: "Learn and apply AI concepts with hands-on sessions.",
      rules: ["Individual participation", "Laptop required", "Basic Python knowledge"],
      prize: "Certificate of Participation",
    },
  ];

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="event-details-container">
        <h2 className="not-found">Event not found</h2>
        <Link to="/events" className="back-btn">Back to Events</Link>
      </div>
    );
  }

  return (
    <main className="event-details-container">
      <h1 className="event-title neon-text-gradient">{event.title}</h1>
      <p className="event-description">{event.description}</p>

      <div className="event-section">
        <h3 className="section-heading neon-text">Rules</h3>
        <ul className="rules-list">
          {event.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <div className="event-section">
        <h3 className="section-heading neon-text">Prize</h3>
        <p className="prize">{event.prize}</p>
      </div>

      <Link to="/events" className="back-btn">⬅ Back to Events</Link>
    </main>
  );
}
