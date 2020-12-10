import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🕴️": "Rude Boy",
  "🧗": "Climber",
  "🤺": "fencer",
  "⛷️": "skier",
  "🏂": "snowboarder",
  "🏌️": "golf player",
  "🚴‍♀️": "cyclig",
  "🤼": "wrestling",
  "🤸‍♀️": "women cartwheeling",
  "🧘": "person in lotus position",
  "🎗️": "remainder ribbon",
  "🎫": "ticket"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "sorry!We dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App" style={{ backgroundColor: "#dcf8c6" }}>
      <h1 style={{ color: "black", backgroundColor: "#dcf8c6" }}>
        🕵️Emojimeanings
      </h1>
      <input
        style={{ padding: "1rem", border: "solid", fontSize: "1rem" }}
        onChange={emojiInputHandler}
        placeholder="put emoji here ...🔍"
      ></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
