import "./App.css";
import "./fetch/users";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  Outlet
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home} from "./components/Home";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;