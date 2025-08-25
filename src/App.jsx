import React from "react";
import "./App.css";
import { useFetchCharacters } from "./hooks/useFetchCharacters";
import Character from "./Character";

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/1";
const urlRick = "https://rickandmortyapi.com/api/character/1";

export default function App() {
  const { data: poke, loading: lp, error: ep } = useFetchCharacters(urlPokemon);
  const { data: rick, loading: lr, error: er } = useFetchCharacters(urlRick);

  return (
    <div>
      {lp && <p>Cargando...</p>}
      {ep && <p>Error</p>}
      {poke && (
        <Character
          title="Personaje Pokemon"
          name={poke.name}
          image={poke.sprites.front_default}
        />
      )}

      {lr && <p>Cargando...</p>}
      {er && <p>Error</p>}
      {rick && (
        <Character
          title="Personaje Rick and Morty"
          name={rick.name}
          image={rick.image}
        />
      )}
    </div>
  );
}