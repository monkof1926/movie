import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './components/Home';
import {Movie} from './components/Movie';
import MyNavBar from './object/MyNavBar';
import {SearchView} from './components/SearchView';
import Login from './components/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'    element = {<MyNavBar />} >
          <Route path='/Home'         element = {<Home/>} />
          <Route path="/Movie/:id" element={<Movie />} />
          <Route path='/SearchView' element = {<SearchView />} />
          <Route path='/Login' element = {<Login />} />

        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
