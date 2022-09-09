import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  function logWhenClicked() {
    console.log("Logo was clicked");
  }

  return (
  <div id="div1">
    <Logo appName = "Pokedex" handleClick={logWhenClicked}/>
    <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away"]}/>
    <CaughtPokemon date = {new Date().toLocaleDateString()}/>
  </div>
  );
}

export default App;