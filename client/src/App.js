import './App.css';
import { Route } from "react-router-dom";
// import React, { Component } from "react";
import AllPizzerias from "./components/AllPizzerias";
import NewPizzeria from './components/NewPizzeria';
import Navbar from './components/Navbar';
import LeaveReview from './components/LeaveReview';
import PizzeriaDetails from "./components/PizzeriaDetails"

function App() {
  return (

    <div className="App">
      <header>
        <h1>Slice-o-Pedia</h1>
        <Navbar />
      </header>

      <Route path="/pizzerias">
        <AllPizzerias />
      </Route>
      <Route path="/new">
        <NewPizzeria />
      </Route>
      <Route path="/review">
        <LeaveReview />
      </Route>
      <Route path="/pizzerias/:id">
        <PizzeriaDetails />
      </Route>

    </div>
  );
}

export default App;
