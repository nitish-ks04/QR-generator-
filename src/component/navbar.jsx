import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const islanding = location.pathname === "/"
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo-link">
          <span className="nav-title">QR</span>
        </Link>
      </div>

      <div className="nav-link">
        {!islanding && (
          <>
            <button onClick={() => navigate("/")}>Back</button>
            <button onClick={() => navigate("/history")}>History</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
