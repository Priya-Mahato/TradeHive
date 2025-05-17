import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleMenuClick = () => {
    // Placeholder: implement sidebar toggle or mobile menu here if needed
    alert("Menu toggle clicked!");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/TradeHiveLogo.svg" style={{ width: "24%" }} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ps-5 mb-2 mb-lg-0">
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href={DASHBOARD_URL}
                    // Removed target="_blank" so dashboard opens in the same tab
                    rel="noopener noreferrer"
                  >
                  Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger btn-sm ms-2" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}

            <li className="nav-item">
              <button
                className="btn btn-link nav-link active"
                onClick={handleMenuClick}
                aria-label="Toggle menu"
                style={{ cursor: "pointer" }}
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
