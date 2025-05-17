import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We poineered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 text-muted border-top" style={{lineHeight:'1.7', fontSize:'0.9em'}}>
        <div className="col-6 p-5">
          <p>
            We are thrilled to introduce TradeHive, an upcoming trading platform
            designed to break down the barriers between retail investors and the
            financial markets. Our goal is to provide a seamless, intuitive
            experience for traders of all levels, making it easier for anyone to
            get started with investing. At TradeHive, we believe that access to
            trading and investment opportunities should be simple, affordable,
            and efficient.
          </p>
          <p>
            The name "TradeHive" combines "Trade," representing the platform's
            focus on trading, with "Hive," symbolizing a collaborative, buzzing
            space of activity and productivity. Just like a beehive is a hub for
            teamwork and efficiency, TradeHive reflects a vibrant,
            interconnected environment where users can come together, share
            knowledge, and thrive in their trading journey.
          </p>
          <p>
            At the core of TradeHive is cutting-edge technology. We’re
            developing a robust platform that offers real-time market data,
            advanced charting tools, and customizable features that traders can
            use to make informed decisions. Whether you’re executing intraday
            trades or managing a long-term portfolio, TradeHive will provide the
            essential tools you need to navigate the markets efficiently and
            confidently.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Along with the technical features, we're dedicated to providing
            educational resources and building a strong community of traders.
            TradeHive will offer articles, tutorials, and webinars to help users
            at all levels improve their trading skills. We believe continuous
            learning is key to success, and our platform will be a space for
            traders to share knowledge, insights, and strategies.
          </p>
          <p>
            Although we haven't officially launched yet, we're working
            diligently behind the scenes to bring **TradeHive** to life. Our
            team is focused on building a user-friendly interface that
            simplifies trading, making it easy for users to execute trades and
            manage investments. We're also exploring partnerships with financial
            institutions to offer a complete range of services for our users.
          </p>
          <p>
            As we prepare for our official launch, stay connected and follow our
            progress through our blog and social media for updates, sneak peeks,
            and early access opportunities. We're excited to share TradeHive
            with the world and look forward to building a platform that will
            revolutionize the trading experience. Together, we’ll create a hive
            of innovation, growth, and success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
