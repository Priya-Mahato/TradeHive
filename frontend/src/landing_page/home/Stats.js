import React from "react";
function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trade with Confidence</h1>

          <h2 className="fs-4">Your Trust, Our Priority</h2>
          <p className="text-muted">
            At TradeHive, we prioritize transparency, security, and ease of use
            to help you start your financial journey with confidence. Our
            platform is designed to provide a seamless trading experience,
            supported by the latest technology.
          </p>

          <h2 className="fs-4">Security and Transparency at the Core</h2>
          <p className="text-muted">
            No gimmicks, no distractions. TradeHive is committed to offering a
            secure and clutter-free environment where every transaction is
            safeguarded with industry-standard encryption.
          </p>

          <h2 className="fs-4"> A New Ecosystem for Modern Investors</h2>
          <p className="text-muted">
          From real-time market data to comprehensive portfolio tools, TradeHive offers everything you need to manage your investments in one place.
          </p>

          <h2 className="fs-4">Maximize Your Financial Growth</h2>
          <p className="text-muted">
          With our analytics and personalized tools, you can make smarter financial decisions to achieve your goals.
          </p>

        </div>
        <div className="col-6 p-5">
          <img src="media\ecosystem.png" style={{ width: "93%" }} />
            <div className='text-center'>
                    <a href='' className="mx-5" style={{textDecoration:"none"}}>Start Trading with TradeHive <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='' style={{textDecoration:"none"}}>Explore our features <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
