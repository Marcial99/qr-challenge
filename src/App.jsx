import { useState } from "react";
import qr from "./img/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <picture>
          <img src={qr} alt="" className="imagen" />
        </picture>
        <h3 className="subtitle">
          Improve your front-end skills by building projects
        </h3>
        <p className="paragraph">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Marcial99">Marcial99</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
