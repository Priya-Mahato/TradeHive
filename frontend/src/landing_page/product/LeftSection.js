import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <img src={imageURL}/>
        </div>

        <div className="col-2"></div>

        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft:"50px" , textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3" style={{ textDecoration: "none" }}>
            <a href={googleplay}>
              <img src="media\googlePlayBadge (1).svg" />
            </a>
            <a href={appStore}  style={{ textDecoration: "none" }}>
              <img src="media\appstoreBadge (1).svg" style={{marginLeft:"50px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
