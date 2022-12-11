import React from "react";
import { GetUsers } from "./fetch/users";
import {Navgationbar} from "./object/navBar";
import {Poster} from "./object/poster";

const Home = () => {
    return (
        <>
        <h1>Home</h1>
        <>
        <Navgationbar navgationbar/>
        <Poster poster/>
        <p>Hallo testing</p>
        <GetUsers GetUsers/>
        </>
        </>
    );
}

export default Home;