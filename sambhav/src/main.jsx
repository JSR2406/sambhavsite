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

const router = createBrowserRouter([
  {
    path: "/",
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
    <RouterProvider router={router} />
  </StrictMode>
);
