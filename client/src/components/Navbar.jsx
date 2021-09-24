import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-red-600 w-screen h-48 space-x-10 font-bold text-3xl relative shadow-sm font-mono rounded-lg"
      role="navigation"
    >
      <h1 className="pl-8">Welcome to Slice-o-Pedia</h1>
      <br />
      <div className="px-4 cursor-pointer md:hidden">
        <svg className="w-6 h-6" fill="none"
          stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/pizzerias">Pizzerias</Link>
        <Link className="p-4" to="/new">Add a Pizzeria</Link>
      </div>
    </nav>



  )
}

export default Navbar;
