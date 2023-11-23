import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bulawayo" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Zaemah"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emmah Zanele Mpofu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Zaemah/React-Weather-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}