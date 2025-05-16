import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo-link">
          <span className="nav-title">QR</span>
        </Link>
      </div>
      <div className="nav-link">
        <button onClick={()=>navigate("/")}> Back</button>
        <button onClick={()=>navigate("/history")}> history</button>
      </div>
    </nav>
  );
}

export default Navbar;
