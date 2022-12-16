import React, { useEffect } from "react";
import { Poster } from "../object/poster.jsx";
import MyNavBar from "../object/MyNavBar.jsx";
import { UserList } from "../fetch/usersList";


const Home = () => {
  useEffect(() => {
    //Code to run when the component is rendered or updated
  });

  return (
    <div>
     
      <p>Hallo</p>
      <Poster />
      <UserList />
    </div>
  );
}

export { Home };