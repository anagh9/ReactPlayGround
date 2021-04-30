import React from "react";
import NavBar from "./components/navBar";
import Jumbotronn from "./components/Jumbotron";
import CrousalSlider from "./components/CrousalSlider";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Jumbotronn />
      <CrousalSlider />
    </div>
  );
};

export default App;
