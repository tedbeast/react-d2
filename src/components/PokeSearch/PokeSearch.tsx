import React, { useState } from "react";
import { PokemonDisplay } from "../PokemonDisplay/PokemonDisplay";
import Axios from "axios"
import { Pokemon } from "../../models/Pokemon";

function PokeSearch(){

    let [inputState, updateInputState] = useState('');
    let [pokemon, updatePokemonState] = useState({name:'', id: 0, url:['']})

    function updateState(event : any){
        updateInputState(event.target.value);
    }
    function getPokemonAPI(){
        let pokemon = Axios.get("https://pokeapi.co/api/v2/pokemon/"+inputState).then((response) => 
        {   
            let spriteArray:string[] = [response.data.sprites.front_default, response.data.sprites.back_default, 
                response.data.sprites.front_shiny]
            let apiPokemon:Pokemon = {name: response.data.name, id: response.data.id, url: spriteArray}
            updatePokemonState(apiPokemon)});
    }

    return (
    <>
        <h1>Pokemon Search</h1>
        <p>{inputState}</p>
        <input value={inputState} onChange={updateState}></input>
        <button onClick={getPokemonAPI}>search</button>
        <PokemonDisplay pokemon={pokemon}></PokemonDisplay>
    </>
    );
}
export default PokeSearch;