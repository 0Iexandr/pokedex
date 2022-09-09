import React, { useState } from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const pokemons = ["Pikachu", "Bulbasaur", "Ivysaur", "Charmander", "Charizard", "Squirtle", "Wartortle"];
  const randomPokemon = Math.floor(Math.random() * pokemons.length);

  function catchPokemon() {
    setCaught(caught.concat(pokemons[randomPokemon]));
  }

  return (
    <>
      <p id="p1">Caught {caught.length} Pokemon on {props.date}</p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
      {caught.map((pokemon, idx) => (
        <li key = {idx}>{pokemon}</li>
      ))}
      </ul>
    </>
  );
}

export default CaughtPokemon;