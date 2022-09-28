import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import DogCreate from "./components/DogCreate/DogCreate";
import DogDetails from "./components/DogDetails/DogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path={"/"} component={LandingPage} />
        <Route path={"/home"} component={Home} />
        <Route path={"/dog/:name"} component={DogDetails} />
        <Route path={"/createdog"} component={DogCreate} />
      </BrowserRouter>
    </>
  );
}

export default App;
