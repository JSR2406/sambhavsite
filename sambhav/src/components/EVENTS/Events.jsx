import React, { useState } from 'react';
import './style.css'; 
const EventCard = ({ title, image }) => {
  return (
    <div className="card rounded-3xl overflow-hidden shadow-xl flex flex-col items-center justify-center p-6 text-center bg-slate-800/40 border border-blue-500/50 backdrop-blur-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_15px_rgba(59,130,246,0.2),_0_4px_6px_rgba(59,130,246,0.1)]">
      <div className="w-full h-48 mb-4">
        <img
          src={image}
          alt="Event Image"
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x400/1e293b/ffffff?text=EVENT+IMAGE';
          }}
        />
      </div>
      <div className="mb-4">
        <h3 className="text-3xl font-semibold uppercase">{title}</h3>
      </div>
      <button className="view-more-btn px-6 py-2 rounded-full font-medium shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-[#F0A467] to-[#3EECED] hover:bg-gradient-to-r hover:from-[#3EECED] hover:to-[#F0A467] hover:shadow-[0_0_10px_#3EECED,_0_0_20px_#F0A467,_0_0_30px_#3EECED]">
        view more
      </button>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full p-4 md:p-0 h-[75px] flex justify-between items-center bg-slate-900/70 backdrop-blur-sm z-1000">
      <div className="nav-logo p-2">
        <img src="/Assests/logo.png" alt="Sambhav Logo" className="h-[200px] w-[200px] object-contain" />
      </div>
      <ul className={`nav-links flex gap-10 md:gap-16 list-none mr-5 md:mr-10 ${mobileMenuOpen ? 'block' : 'hidden md:flex'} absolute md:static top-[75px] left-0 w-full md:w-auto bg-slate-900/90 md:bg-transparent flex-col md:flex-row items-center justify-center`}>
        <li><a href="#home" className="text-blue-500 hover:text-orange-500 transition-colors duration-300 font-bold text-lg">HOME</a></li>
        <li><a href="#about" className="text-orange-500 hover:text-blue-500 transition-colors duration-300 font-bold text-lg">ABOUT</a></li>
        <li><a href="#events" className="text-blue-500 hover:text-orange-500 transition-colors duration-300 font-bold text-lg">EVENTS</a></li>
        <li><a href="#leaderboard" className="text-orange-500 hover:text-blue-500 transition-colors duration-300 font-bold text-lg">LEADERBOARD</a></li>
        <li><a href="#contact" className="text-blue-500 hover:text-orange-500 transition-colors duration-300 font-bold text-lg">CONTACT</a></li>
      </ul>
      <div className="menu-toggle md:hidden cursor-pointer p-4 text-3xl text-blue-500 z-1100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 pt-[75px]">
      <div className="mb-8">
        <img src="/Logo.png" alt="Sambhav 2K23 Logo" className="max-w-xs md:max-w-sm lg:max-w-md mx-auto" />
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase my-4 neon-text-gradient bg-clip-text text-transparent">DYP COE's Sambhav 2K23</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-white/80">Let's make a tech move!</h2>
      </div>
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-white/90">February 20–21, 2023</h3>
        <button
          onClick={() => window.location.href = '#events'}
          className="mt-6 px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 bg-gradient-to-r from-[#F0A467] to-[#3EECED] text-white hover:bg-gradient-to-r hover:from-[#3EECED] hover:to-[#F0A467]"
        >
          Explore Our Events
        </button>
      </div>
    </section>
  );
};

const eventData = [
  { id: 1, title: "Event Title", image: "https://placehold.co/400x400/1e293b/ffffff?text=EVENT+IMAGE" },
  { id: 2, title: "Event Title", image: "https://placehold.co/400x400/1e293b/ffffff?text=EVENT+IMAGE" },
  { id: 3, title: "Event Title", image: "https://placehold.co/400x400/1e293b/ffffff?text=EVENT+IMAGE" },
  { id: 4, title: "Event Title", image: "https://placehold.co/400x400/1e293b/ffffff?text=EVENT+IMAGE" },
  { id: 5, title: "Event Title", image: "https://placehold.co/400x400/1e293b/ffffff?text=EVENT+IMAGE" },
  { id: 6, title: "Event Title", image: "https://placehold.co/400x400/1e293b/ffffff?text=EVENT+IMAGE" },
];

function App() {
  const events = Array.from({ length: 46 }, (_, i) => eventData[i % eventData.length]);

  return (
    <div className="min-h-screen font-inter text-white bg-gray-900 bg-[url('/Assests/bg.jpg')] bg-cover bg-fixed bg-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .neon-text-gradient {
          background: linear-gradient(90deg, #3EECED 0%, #F0A467 60%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 5px rgba(240, 164, 103, 0.7), 0 0 10px rgba(62, 236, 237, 0.5);
        }
      `}</style>
      <Navbar />
      <HeroSection />

      <main id="events" className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase neon-text-gradient mb-4">
            TECHNICAL EVENTS
          </h1>
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <div id="event-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {events.map((event, index) => (
            <EventCard key={index} title={event.title} image={event.image} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
