import React, { useEffect } from "react";
import { Poster } from "../object/poster.jsx";
import Navgationbar from "../object/navBar.jsx";
import { UserList } from "../fetch/users";


const Home = () => {
  useEffect(() => {
    // Code to run when the component is rendered or updated
  });

  return (
    <div>
      <UserList />
      <Navgationbar />
      <p>Hallo</p>
      <Poster />
    </div>
  );
}

export { Home };