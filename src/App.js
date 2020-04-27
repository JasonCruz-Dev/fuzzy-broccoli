import React from "react";
import "./App.css";
import center_img from "./images/headshot.jpeg";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className='App'>
      <h3>Positive Living Wanderland</h3>

      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/contact' component={Contact} />

      <div className='center_img'>
        <img src={center_img} alt='A woman by some water' />
      </div>
    </div>
  );
}
