import React, { useEffect } from "react";
import { GetUsers } from "./fetch/users.jsx";
import {Navgationbar} from "./object/navBar.jsx";
import {Poster} from "./object/poster.jsx";



const Home = () => {
    return (
        useEffect(
        <div>
        <h1>Home</h1>
        <>
        <div>{Navgationbar()}</div>
        <Poster poster/>
        <p>Hallo testing</p>
        <GetUsers GetUsers/>
        </>
        </div>
        )
    );
}

export default Home;