import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
// import DogCreate from "./components/DogCreate";
import DogCreate from "./components/DogCreate"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={"/"} component={LandingPage} />
        <Route path={"/home"} component={Home} />
        <Route path={"/createdog"} component={DogCreate} />
      </BrowserRouter>
    </div>
  );
}

export default App;
