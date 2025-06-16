import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showWarning, setShowWarning] = useState(false);

  const handleGetStartedClick = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    } else {
      window.location.href = 'https://tradehive-dashboard.onrender.com';
    }
  };

  return (
    <>
      {showWarning && (
        <div
          className="position-fixed top-50 start-50 translate-middle alert alert-danger text-center shadow"
          style={{
            zIndex: 1050,
            width: "600px",
            fontSize: "1rem",
            whiteSpace: "nowrap"
          }}
          role="alert"
        >
          Please sign up or log in before getting started.
        </div>
      )}

      <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="/media/TradeHiveLogo.svg" style={{ width: "24%" }} alt="logo" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ps-5 mb-2 mb-lg-0">
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup | Login
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button
                    className="nav-link active btn btn-link"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    Logout
                  </button>
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
              <li className="nav-item">
                <button
                  className="nav-link active btn btn-link"
                  onClick={handleGetStartedClick}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
