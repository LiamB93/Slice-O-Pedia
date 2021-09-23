import './App.css';
import { Route } from "react-router-dom";
import { useState } from "react";
// import React, { Component } from "react";
import AllPizzerias from "./components/AllPizzerias";
import NewPizzeria from './components/NewPizzeria';
import Navbar from './components/Navbar';
import LeaveReview from './components/LeaveReview';
import Home from "./components/Home";
// import PizzeriaDetails from "./components/PizzeriaDetails"

function App() {
  const [pizzerias, setPizzerias] = useState([]);
  return (

    <div className="App">


      <Navbar />

      <Route path="/">
        <Home className="fixed w-full h-full bg-no-repeat bg-cover" />

      </Route>

      <Route exact path="/pizzerias">
        <AllPizzerias pizzerias={pizzerias} setPizzerias={setPizzerias} />
      </Route>
      <Route exact path="/new">
        <NewPizzeria />
      </Route>
      <Route exact path="/pizzerias/:pizzeriaName/review">
        <LeaveReview pizzerias={pizzerias} />
      </Route>
      {/* <Route path="/pizzerias/:id">
        <PizzeriaDetails />
      </Route> */}

    </div>
  );
}

export default App;
