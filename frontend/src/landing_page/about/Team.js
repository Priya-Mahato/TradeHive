import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">TEAM</h1>
      </div>
      <div
        className="row p-3 text-muted "
        style={{ lineHeight: "1.7", fontSize: "0.9em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media\Puja&Priya.jpg"
            style={{ borderRadius: "100%", width: "40%" }}
          />
          <h5 className="mt-5">Priya Mahato & Puja Singh</h5>
          <h6>Founders & Developers</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            I, Puja Singh, am the front-end developer of TradeHive, focused on
            creating a user-friendly interface that simplifies trading and
            ensures seamless navigation, whether placing trades or tracking
            investments.
          </p>
          <p>
            I, Priya Mahato, handle the back-end development, building a robust
            system that powers real-time trading, secure transactions, and
            accurate market data, ensuring smooth and secure platform
            performance.
          </p>
          <p>
            Together, we aim to provide traders with a dynamic platform that
            supports seamless trading and continuous learning, offering the
            tools and insights needed to succeed in today’s fast-paced markets.
          </p>
          <p>Connect on <a href="" style={{ textDecoration: "none" }}>
              HomePage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a> </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
