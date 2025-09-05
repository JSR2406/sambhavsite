import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Import components
import Layout from './App.jsx';  // Layout wrapper with <Outlet />
import LandingPage from './components/LANDING_PAGE/LandingPage.jsx';
import About from './components/ABOUT/About.jsx';
import Contact from './components/CONTACT/Contact.jsx';
import LeaderBoard from './components/LEADERBOARD/LeaderBoard.jsx';
import Faq from './components/FAQ/Faq.jsx';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <LandingPage /> },
      { path: 'about', element: <About /> },
      { path: 'leaderboard', element: <LeaderBoard /> },
      { path: 'faq', element: <Faq /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

// Render app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
