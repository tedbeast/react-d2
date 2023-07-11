import React from "react";
import { Pokemon } from "../../models/Pokemon";

interface myProps {
    pokemon:Pokemon
}

export function PokemonDisplay(props: myProps){

    return(<>
    <h1>Name: {props.pokemon.name}</h1>
    <p>id: {props.pokemon.id}</p>
    <img src={props.pokemon.url}></img>
    </>)
}