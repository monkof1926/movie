import './App.css';
import './fetch/users'
import { GetUsers } from './fetch/users';
import { 
  Routes, Route, Link, NavLink, useParams, Outlet
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from './components/Home';
import { useState } from 'react';




function App() {
  <GetUsers GetUsers/>
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <>
      <p>{GetUsers}</p>
      </>
    </div>
  );
}

export default App;
