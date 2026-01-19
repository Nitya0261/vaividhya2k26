
import { useState } from "react";
import { NavLink } from "react-router-dom";


function Navbar() {

   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar-wrapper">
      <div className="container nav-inner">
        <div className="nav-logo">
          VAIVIDHYA <span>2K26</span>
        </div>

    <nav className="custom-navbar">
  <div className="nav-container">

    {/* LOGO */}
    <NavLink to="/" className="navbar-brand">
      VAIVIDHYA <span>2K26</span>
    </NavLink>

    {/* HAMBURGER */}
    <div
      className={`hamburger ${menuOpen ? "open" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

    {/* NAV LINKS */}
    <div className={`nav-links ${menuOpen ? "active" : ""}`}>
      <NavLink to="/" end onClick={() => setMenuOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/events" onClick={() => setMenuOpen(false)}>
        Events
      </NavLink>
      <NavLink to="/search-receipt" onClick={() => setMenuOpen(false)}>
        Find Receipt
      </NavLink>
      <NavLink
        to="/register"
        className="nav-register-btn mobile"
        onClick={() => setMenuOpen(false)}
      >
        Register
      </NavLink>
    </div>

    {/* DESKTOP REGISTER BUTTON */}
    <NavLink to="/register" className="nav-register-btn desktop">
      Register
    </NavLink>

  </div>
</nav>

      </div>
    </header>
  );
}

export default Navbar;
