//Entry point for webpack
import "./mystyles.scss";
import logo from "./public/logo_1.png";
const img = document.createElement("img");
img.src = logo;
const imgContainer = document.getElementById("img-container");
imgContainer.appendChild(img);
