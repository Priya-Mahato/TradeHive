import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
  <div className="container border-top mt-5">
    <div className="row mt-5">
      <div className="col">
        <img src="media\TradeHiveLogo.svg" style={{ width: "37%" }} />
        <p> &copy; 2025 TradeHive Pvt. Ltd. All rights reserved.</p>
        
        <div className="social-icons" >
        <a href="https://twitter.com" className="text-muted" style={{ textDecoration: "none", marginRight: "15px" }}>
            <i className="fa fa-twitter" aria-hidden="true" style={{ fontSize: "20px" }}></i>
          </a>
          <a href="https://facebook.com" className="text-muted" style={{ textDecoration: "none", marginRight: "15px" }}>
            <i className="fa fa-facebook-official" aria-hidden="true" style={{ fontSize: "20px" }}></i>
          </a>
          <a href="https://instagram.com" className="text-muted" style={{ textDecoration: "none", marginRight: "15px" }}>
            <i className="fa fa-instagram" aria-hidden="true" style={{ fontSize: "20px" }}></i>
          </a>
          <a href="https://linkedin.com" className="text-muted" style={{ textDecoration: "none", marginRight: "15px" }}>
            <i className="fa fa-linkedin" aria-hidden="true" style={{ fontSize: "20px" }}></i>
          </a>
          <a href="https://telegram.org" className="text-muted" style={{ textDecoration: "none", marginRight: "15px" }}>
            <i className="fa fa-telegram" aria-hidden="true" style={{ fontSize: "20px" }}></i>
          </a>
        </div>
      </div>

      <div className="col">
        <p>Company</p>
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> About </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Products </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Pricing </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Referral programme </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Careers </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> TradeHive.tech </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Press & media </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> TradeHive Cares (CSR) </a>
        <br />
      </div>

      <div className="col">
        <p>Support</p>
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> About </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Contact </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Support </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Support Portal </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> T-Connect blog </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> List of charges </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Download & Resources </a>
        <br />
      </div>

      <div className="col">
        <p>Account</p>
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Open an Account </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Fund transfer </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> Referral programme </a>
        <br />
        <a href="" className="text-muted" style={{ textDecoration: "none" }}> 60-day challenge </a>
        <br />
      </div>
    </div>

    <div className="mt-5 text-small text-muted" style={{ fontSize: "14px" }}>
      <p>
        TradeHive Trading Platform: Currently, TradeHive is not a registered
        member of NSE or BSE. However, we are in the process of preparing
        for future affiliation with these exchanges. For now, TradeHive
        provides educational and informational resources on stock trading.
        Registered Address: TradeHive Pvt. Ltd., [Plot No.38(P), 38(A), 39(P) & 39(A) Uluberia Industrial Growth Center Near Birshibpur Railway Station Amta Rd, Kulgachia, Uluberia, Harinarayan Chak, West Bengal 711316].
        For any inquiries or complaints, please contact support@tradehive.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI.
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on the SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
      </p>

      <p>
        Investments in securities markets are subject to market risks; read
        all the related documents carefully before investing.
      </p>

      <p>
        "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information about your transactions directly from the Exchange on your mobile/email at the end of the day. Issued in the interest of investors." KYC is a one-time exercise while dealing in securities markets – once KYC is completed through a SEBI-registered intermediary (broker, DP, Mutual Fund, etc.), you do not need to undergo the process again when approaching another intermediary. As a business, TradeHive does not provide stock tips, and we have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradeHive and offering such services, please report it here.
      </p>
    </div>

    {/* Footer Links with more space between them */}
    <div className="mt-3 text-small text-muted text-center" style={{ fontSize: "14px" }}>
      <p>
        <a href="" className="text-muted" style={{ textDecoration: "none", marginRight: "30px" }}> NSE </a>
        <a href="" className="text-muted" style={{ textDecoration: "none", marginRight: "30px" }}> BSE </a>
        <a href="" className="text-muted" style={{ textDecoration: "none", marginRight: "30px" }}> MCX </a>
        <a href="" className="text-muted" style={{ textDecoration: "none", marginRight: "30px" }}> Terms & Conditions </a>
        <a href="" className="text-muted" style={{ textDecoration: "none", marginRight: "30px" }}> Policy & Procedure </a>
        <a href="" className="text-muted" style={{ textDecoration: "none", marginRight: "30px" }}> Privacy Policy </a>
        <a href="" className="text-muted" style={{ textDecoration: "none", marginRight: "30px" }}> Disclosure </a>
      </p>
    </div>
  </div>
</footer>

  );
}

export default Footer;
