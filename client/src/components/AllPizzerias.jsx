import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const base = process.env.REACT_APP_AIRTABLE_BASE
const key = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${base}/pizzerias`
const config = {
  headers: {
    Authorization: `Bearer ${key}`
  }
};

function AllPizzerias(props) {
  const { pizzerias, setPizzerias } = props

  useEffect(() => {
    async function fetchPizzeria() {
      try {
        const res = await axios.get(URL, config)
        setPizzerias(res.data.records);
        console.log(res.data.records)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPizzeria();
  }, []);
  return (
    <>






      {pizzerias.map((pizzeria) => {
        return (
          <Link to={`/pizzerias/${pizzeria.fields.name}/review`} key={pizzeria.id}>
            <ul className="font-mono text-5xl my-8">
              <li className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl flex justify-center space-x-12">
                <h1>{pizzeria.fields.name}</h1>
                <h1>{pizzeria.fields.location}</h1>
                <h1>{pizzeria.fields.rating}</h1>
              </li>
            </ul>
          </Link>

        );
      })}


    </>
  )
}
export default AllPizzerias;
