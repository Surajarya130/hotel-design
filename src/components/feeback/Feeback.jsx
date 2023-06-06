import React from "react";
import "./feeback.css";

function Feeback() {
  return (
    <div className="feedbackSection">
      <div className="reviewsSection">
        <h5>Reviews</h5>
        <h4 style={{ color: "#577ab1" }}>9.6/10</h4>
        <p className="revNamePoints">
          <span>Cleaniness</span> <span>10/10</span>{" "}
        </p>
        <div className="reviewRangeBar">
          <div style={{ width: "100%" }} className="reviewPoint"></div>
        </div>

        <p className="revNamePoints">
          <span>Amenties</span> <span>8/10</span>{" "}
        </p>
        <div className="reviewRangeBar">
          <div style={{ width: "80%" }} className="reviewPoint"></div>
        </div>

        <p className="revNamePoints">
          <span>Location</span> <span>7/10</span>{" "}
        </p>
        <div className="reviewRangeBar">
          <div style={{ width: "70%" }} className="reviewPoint"></div>
        </div>
      </div>
      <div className="customerFeedback">
        <div className="feedBackText">
          <h6>Lorem ipsum adipisicing elit. Iste, ad?</h6>
          <span className="username">Mark M.</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          </p>
          <ul>
            <li>Good staff</li>
            <li>Clear Area</li>
            <li>Service Desk helpful</li>
            <li>Room was cleaned</li>
          </ul>
        </div>
        <div className="feedbackDatingInfo">
          <div className="rateNum">
            <h6>Excellent</h6>
          </div>
          <div className="ratingNum">9.5</div>
        </div>
      </div>
    </div>
  );
}

export default Feeback;
