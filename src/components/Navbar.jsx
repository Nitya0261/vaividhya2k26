import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">

        {/* LOGO */}
        <NavLink className="navbar-brand fw-bold" to="/">
          VAIVIDHYA <span className="text-warning">2K26</span>
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/events">
                Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/search-receipt">
                Find Receipt
              </NavLink>
            </li>

            {/* REGISTER BUTTON */}
            <li className="nav-item">
              <NavLink
                className="btn btn-warning text-dark fw-semibold px-4"
                to="/register"
              >
                Register
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
