import './App.css';
import { Route } from "react-router-dom";
import AllPizzerias from "./components/AllPizzerias";
import NewPizzeria from './components/NewPizzeria';
import Navbar from './components/Navbar';

function App() {
  return (

    <div className="App">
      <header>
        <h1>Slice-o-Pedia</h1>
        <Navbar />
      </header>
      <Route exact path="/pizzerias">
        <AllPizzerias />
      </Route>
      <Route>
        <NewPizzeria />
      </Route>
    </div>
  );
}

export default App;
