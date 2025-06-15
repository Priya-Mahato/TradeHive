import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>TradeHive Universe</h1>
                <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-md-4 col-sm-6 p-3 mt-5">
                    <img src="media/smallcaseLogo.png" alt="Smallcase Logo" className="img-fluid" style={{ width: "150px", marginBottom: "20px" }} />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>

                <div className="col-md-4 col-sm-6 p-3 mt-5">
                    <img src="media/streakLogo.png" alt="Streak Logo" className="img-fluid" style={{ width: "150px", marginBottom: "20px" }} />
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>

                <div className="col-md-4 col-sm-6 p-3 mt-5">
                    <img src="media/sensibullLogo.svg" alt="Sensibull Logo" className="img-fluid" style={{ width: "150px", marginBottom: "20px" }} />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>

                <div className="col-md-4 col-sm-6 p-3 mt-5">
                    <img src="media/goldenpiLogo.png" alt="GoldenPi Logo" className="img-fluid" style={{ width: "150px", marginBottom: "20px" }} />
                    <p className="text-small text-muted">Bond trading platform</p>
                </div>

                <div className="col-md-4 col-sm-6 p-3 mt-5">
                    <img src="media/dittoLogo.png" alt="Ditto Logo" className="img-fluid" style={{ width: "150px", marginBottom: "20px" }} />
                    <p className="text-small text-muted">Insurance platform</p>
                </div>
            </div>

            {/* Button placed outside the row to appear at the bottom */}
            <div className="text-center mt-5">
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;
