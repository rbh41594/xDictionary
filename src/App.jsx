import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = (term) => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === term.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <span>
        <input
          type="text"
          placeholder="Search for a word . . ."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => handleSearch(searchTerm)}>Search</button>
      </span>
      <div>{result && <p>{result}</p>}</div>
    </>
  );
}

export default App;