import React from "react";
import "./Community.css";

function Community() {
  return (
    <div className="container">
      <div className="community__container">
        <h2 className="section_heading">Community</h2>
        <h3>
          We love to share our Coffee Experiences with our surrounding Community
        </h3>
        <div className="community__body">
          <img className="community__img" src="./community-1.jpg" />
          <div>
            <h4>
              We host many immersive events and we'd love to see YOU at one.
              From communal coffee tasting experiences to group brewing guides.{" "}
            </h4>
            <button className="community__button">Find out more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
