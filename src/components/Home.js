import React from "react";
import Shop from "./Shop";
import Community from "./Community";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="home">
        <h1 className="home__heading">
          Welcome to <span className="home__span">HomeBrew</span>
        </h1>
      </div>
      <section></section>
      <Shop />
      <Community />
    </div>
  );
}
