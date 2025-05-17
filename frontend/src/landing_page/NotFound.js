import React from "react";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3" style={{ fontWeight: "bold" }}>
          404 Page Not Found
        </h1>
        <p className="mb-4" style={{ color: "#6c757d" }}>
          Sorry, the page that you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
