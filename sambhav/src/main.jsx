import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Import components
import LandingPage from './components/LANDING_PAGE/LandingPage.jsx';
import About from './components/ABOUT/About app/About.jsx';
import Events from './components/EVENTS/Events.jsx';
import Events_detail from './components/EVENTS DETAIL/Details/Details.jsx';
import LeaderBoard from './components/LEADERBOARD/leaderboard section/LeaderBoard.jsx';
import Faq from './components/LEADERBOARD/leaderboard section/LeaderBoard.jsx';
import Contact from './components/CONTACT/Contact.jsx';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,  // set LandingPage as default
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'leaderboard',
    element: <LeaderBoard />,
  },
  {
    path: 'faq',
    element: <Faq />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
]);


// Render app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
