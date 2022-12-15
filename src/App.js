import "./App.css";
import "./fetch/users";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import { Movie } from "./components/Movie";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;