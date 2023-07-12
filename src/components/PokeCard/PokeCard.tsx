import React from "react";
import axios from "axios";
import { Pokemon } from "../../models/Pokemon";
interface props {
    pokemon:Pokemon
}
export function PokeCard(props : props){
    
    return(<><p>{props.pokemon.name} 
                {props.pokemon.id}</p></>)
}