import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\kite (1).png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <RightSection
        imageURL="media\console (1).png"
        productName="Console"
        productDesription="The central dashboard for your TradeHive account. Gain insights into your trades and invesments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media\coin (1).png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the invesment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <RightSection
        imageURL="media\kiteconnect (1).png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are startup, build your invesment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media\varsity (1).png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size card to help you lear on the go."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">Want to know more about our technology stack? Check out Tradehive.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
