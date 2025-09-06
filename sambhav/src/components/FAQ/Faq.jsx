import React, { useEffect } from "react";
import "./Faq.css";

export default function FAQ() {
  // Create animated background particles
  const createParticles = () => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = Math.random() * 4 + 4 + "s";
      particle.dataset.speed = Math.random() * 2 + 1;
      particlesContainer.appendChild(particle);
    }
  };

  // Toggle FAQ expand/collapse
  const toggleFaq = (e) => {
    const faqItem = e.currentTarget.parentElement;
    const allFaqItems = document.querySelectorAll(".faq-item");

    allFaqItems.forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("expanded");
        item.querySelector(".expand-icon").textContent = "+";
      }
    });

    const expandIcon = faqItem.querySelector(".expand-icon");
    if (faqItem.classList.contains("expanded")) {
      faqItem.classList.remove("expanded");
      expandIcon.textContent = "+";
    } else {
      faqItem.classList.add("expanded");
      expandIcon.textContent = "×";
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    document.getElementById("navLinks").classList.toggle("active");
  };

  useEffect(() => {
    createParticles();

    // Parallax effect
    const handleMouseMove = (e) => {
      const particles = document.querySelectorAll(".particle");
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      particles.forEach((particle) => {
        const speed = parseFloat(particle.dataset.speed);
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        particle.style.transform = 'translate(${x}px, ${y}px)';
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="faq-page">
      {/* Background particles */}
      <div className="bg-particles" id="particles"></div>

      {/* Side decorations */}
      <div className="side-decoration left">
        <div className="circuit-pattern"></div>
      </div>
      <div className="side-decoration right">
        <div className="circuit-pattern"></div>
      </div>

      {/* Main content */}
      <main className="container">
        <h1 className="title">Frequently Asked Questions</h1>

        <div className="faq-container">
          {[
            {
              icon: "⚙",
              q: "What is Sambhav 3.0?",
              a: "Sambhav 3.0 is D.Y. Patil College of Engineering's premier technical festival..."
            },
            {
              icon: "📝",
              q: "How do I register for events?",
              a: "Registration is simple! Click the 'Register Now' button..."
            },
            {
              icon: "👥",
              q: "Who can participate?",
              a: "All engineering students from recognized colleges..."
            },
            {
              icon: "🎯",
              q: "What are the event categories?",
              a: "Events span across Programming & AI, Robotics & Automation..."
            },
            {
              icon: "🏆",
              q: "Are there prizes and certificates?",
              a: "Yes! We offer cash prizes, internship opportunities..."
            }
          ].map((faq, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-question" onClick={toggleFaq}>
                <div className="faq-icon">{faq.icon}</div>
                <div><h3>{faq.q}</h3></div>
                <div className="expand-icon">+</div>
              </div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}