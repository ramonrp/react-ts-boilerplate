import React from "react";
import "./mystyles.scss";
import logo from "./public/logo_1.png";

export const App = () => {
  return (
    <>
      <h1>Hello React</h1>
      <div class="red-background">RD</div>
      <div id="img-container">
        <img src={logo}></img>
      </div>
      ;
    </>
  );
};
