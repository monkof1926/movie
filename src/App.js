import "./App.css";
import "./fetch/users";
import { GetUsers } from "./fetch/users";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  Outlet
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { useState } from "react";
import { Poster } from "./object/poster";
import Navgationbar from "./object/navBar";

function App() {
  return (
    <div className="App">
      <Navgationbar />
      <p>{Poster()}</p>
    </div>
  );
}

export default App;