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
    <div>

      {pizzerias.map((pizzeria) => {
        return (
          <Link to={`/pizzerias/${pizzeria.fields.name}/review`} key={pizzeria.id}>
            <ul>
              <li>{pizzeria.fields.name}</li>
            </ul>
          </Link>

        );
      })}


    </div>
  )
}
export default AllPizzerias;
