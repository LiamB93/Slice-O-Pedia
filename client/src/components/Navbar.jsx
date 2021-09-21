import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="pizzerias">Pizzerias</Link>
      <br />
      <Link to="/new">Add a Pizzeria</Link>
    </nav>

  )
}

export default Navbar;
