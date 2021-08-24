import React, { useState } from "react";
import "./styles.css";

const flags = {
  "🇮🇳": "India",
  "🇷🇺": "Russia",
  "🇬🇧": "United Kingdom",
  "🇨🇭": "Switzerland",
  "🇺🇸": "United States",
  "🇦🇺": "Australia",
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🏴‍☠️": "Pirate Flag"
};

const flagsList = Object.keys(flags);

export default function App() {
  const [country, setCountry] = useState("");

  function inputOnChangeHandler(event) {
    var userInput = event.target.value;
    flagCountry(userInput);
  }

  function inputOnClickHandler(value) {
    flagCountry(value);
  }

  function flagCountry(value) {
    if (value in flags) {
      console.log(flags[value]);
      setCountry(flags[value]);
    } else {
      setCountry("Not Found in our Database, try the above ones");
    }
  }

  return (
    <div className="App">
      <h1>FlagsPedia</h1>
      <input onChange={inputOnChangeHandler} />
      <h2>flags we know</h2>
      {flagsList.map((flag) => (
        <span key={flag} onClick={() => inputOnClickHandler(flag)}>
          {flag}
        </span>
      ))}
      <h2 className="country">{country}</h2>
    </div>
  );
}
