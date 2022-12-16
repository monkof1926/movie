import React, { useEffect } from "react";
import { Poster } from "../object/poster.jsx";
import Navgationbar from "../object/navBar.jsx";
import { UserList } from "../fetch/usersList";


const Home = () => {
  useEffect(() => {
    //Code to run when the component is rendered or updated
  });

  return (
    <div>
      <Navgationbar />
      <p>Hallo</p>
      <Poster />
      <UserList />
    </div>
  );
}

export { Home };