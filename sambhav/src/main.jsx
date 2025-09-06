import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import components
import LandingPage from "./components/Landingpage/Landingpage/LandingPage.jsx";
import About from "./components/ABOUT/Aboutapp/About.jsx";
import Events from "./components/EVENTS/Events.jsx";
import EventsDetail from "./components/EVENTSDETAIL/Details.jsx";
import LeaderBoard from "./components/LEADERBOARD/LeaderBoard.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import Contact from "./components/CONTACT/Contact.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/detail",
    element: <EventsDetail />,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
