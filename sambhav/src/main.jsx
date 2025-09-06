<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LANDING PAGE/landing page/Landingpage.jsx";
import About from "./components/ABOUT/About app/About.jsx";
import Events from "./components/EVENTS/Events.jsx";
import Events_detail from "./components/EVENTS DETAIL/Details/Details.jsx";
import LeaderBoard from "./components/LEADERBOARD/leaderboard section/LeaderBoard.jsx";
import Faq from "./components/FAQ/Faq/Faq.jsx";
import Contact from "./components/CONTACT/contact app/Contact.jsx";
=======
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
>>>>>>> 1874d3eddfb21e75bfa79f12fb5ae2706a96304f

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element: <Layout />, // Wrap with Layout
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <About /> },
      { path: "events", element: <Events /> },
      { path: "events/:eventId", element: <Events_detail /> },
      { path: "leaderboard", element: <LeaderBoard /> },
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
=======
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
>>>>>>> 1874d3eddfb21e75bfa79f12fb5ae2706a96304f
    <RouterProvider router={router} />
  </React.StrictMode>
);
