// src/components/Layout/Layout.jsx
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="layout-main">
        <div className="page-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
