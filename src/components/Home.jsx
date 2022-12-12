import React, { useEffect } from "react";
import { Poster } from "../object/poster.jsx";
import Navgationbar from "../object/navBar.jsx";

const Home = () => {
  useEffect(() => {
    // Code to run when the component is rendered or updated
  });

  return (
    <div>
      <Navgationbar />
      <h1>Home</h1>
      <Poster />
    </div>
  );
}

export { Home };
