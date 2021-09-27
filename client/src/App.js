import './App.css';
import { Route } from "react-router-dom";
import { useState } from "react";
import AllPizzerias from "./components/AllPizzerias";
import NewPizzeria from './components/NewPizzeria';
import Navbar from './components/Navbar';
import LeaveReview from './components/LeaveReview';

function App() {
  const [pizzerias, setPizzerias] = useState([]);
  return (

    <div className="App">


      <Navbar />
      <div className="main-container">




        <Route exact path="/pizzerias">
          <AllPizzerias pizzerias={pizzerias} setPizzerias={setPizzerias} />
        </Route>
        <Route path="/new">
          <NewPizzeria />
        </Route>
        <Route path="/pizzerias/:pizzeriaName/review">
          <LeaveReview pizzerias={pizzerias} />
        </Route>

      </div>

    </div>
  );
}

export default App;
