import "./App.css";
import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import DogCreate from "./components/DogCreate";
import DogDetails from "./components/DogDetails";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={"/"} component={LandingPage} />
        <Route path={"/home"} component={Home} />
        <Route path={"/dog/:name"} component={DogDetails} />
        <Route path={"/createdog"} component={DogCreate} />
        {/* <Route path={"*"} component={Error} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
