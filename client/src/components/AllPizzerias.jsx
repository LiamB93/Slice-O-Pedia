import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const base = process.env.REACT_APP_AIRTABLE_BASE
const key = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${base}/pizzerias`
const config = {
  headers: {
    Authorization: `Bearer ${key}`
  }
};

function AllPizzerias() {
  const [pizzerias, setPizzerias] = useState([]);

  useEffect(() => {
    async function fetchPizzeria() {
      try {
        const res = await axios.get(URL, config)
        setPizzerias(res.data.records);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPizzeria();
  }, []);
  return (
    <div>

      {pizzerias.map((pizzeria) => {
        return (
          <Link to={`/pizzerias/${pizzeria.id}`} key={pizzeria.id}>
            <ol>
              <li>{pizzeria.fields.name}</li>
            </ol>
          </Link>

        );
      })}


    </div>
  )
}
export default AllPizzerias;
