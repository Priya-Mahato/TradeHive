import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">TEAM</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.7", fontSize: "0.9em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/Puja&Priya.jpg"
            style={{ borderRadius: "100%", width: "40%" }}
            alt="Portrait of Priya Mahato and Puja Singh, co-founders of TradeHive"
          />
          <h5 className="mt-5">Priya Mahato, Puja Singh</h5>
          <h6>Co-Founders and Developers</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            I’m Puja Singh, the front-end developer of TradeHive. My focus lies
            in crafting a seamless, user-friendly interface that simplifies
            trading and ensures smooth navigation—whether you're placing trades
            or monitoring investments.
          </p>
          <p>
            I’m Priya Mahato, responsible for back-end development. I’ve built
            a robust system that powers real-time trading, secure transactions,
            and precise market data processing to deliver reliable and
            efficient platform performance.
          </p>
          <p>
            Together, we strive to deliver a dynamic trading experience through
            TradeHive—a platform designed to support seamless trading and
            continuous learning, while equipping users with the tools and
            insights they need to thrive in today's fast-paced markets.
          </p>
          <p>
            Connect with us on{" "}
            <a
              href="https://yourhomepage.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              HomePage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
