import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div style={{paddingTop:'2rem'}}>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div style={{paddingTop:'2rem'}}>
        <h3>User Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
