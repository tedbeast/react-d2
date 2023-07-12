import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <>
        <Link to="/home">home</Link>
        <Link to="/search">search</Link>
        </>
    );
}

