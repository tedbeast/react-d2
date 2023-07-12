import React, { useContext, useEffect, useState } from "react";
import { contextVar } from "../../App";
import axios from "axios";
import { PokeCard } from "../PokeCard/PokeCard";
import { Pokemon } from "../../models/Pokemon";
export function Home(){

    let loggedIn = useContext(contextVar);
    let [allPokemon, setAllPokemon] = useState([{name:'', id:0, url:['']}]);
    // function getMessage(){
    //     if(loggedIn){
    //         return <h1>Hello, user!</h1>
    //     }else{
    //         return <h1>Please log in</h1>
    //     }
    // }
    function getPokemonNamesAPI(){
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then((result) => 
        
        {
            let names : Pokemon[] = [];
            result.data.results.forEach((element: { name: string; }) => {
                names.push({name:element.name, id:0, url:[]});
            });
            setAllPokemon(names);
            console.log(names)}
        )
    }
    
    useEffect(()=>{
        getPokemonNamesAPI();
    }, [loggedIn]);

    return (<>{loggedIn ? <h1>hello user</h1> : <h1>please log in</h1>}
    {allPokemon.map(name => <PokeCard pokemon={name}></PokeCard>)}
    </>)
}