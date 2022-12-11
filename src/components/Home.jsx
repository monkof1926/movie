import React, { useEffect } from "react";
import { GetUsers } from "./fetch/users";
import {Navgationbar} from "./object/navBar";
import {Poster} from "./object/poster";

const Home = () => {
    return (
        useEffect(
        <div>
        <h1>Home</h1>
        <>
        <Navgationbar navgationbar/>
        <Poster poster/>
        <p>Hallo testing</p>
        <GetUsers GetUsers/>
        
        </>
        </div>
        )
    );
}

export {Home};