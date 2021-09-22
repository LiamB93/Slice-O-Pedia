import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";



const base = process.env.REACT_APP_AIRTABLE_BASE
const key = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${base}/pizzerias`
const config = {
  headers: {
    Authorization: `Bearer ${key}`
  }
};

function LeaveReview(props) {
  // const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [pizzeria, setPizzeria] = useState({});
  const { pizzerias } = props
  const { id } = useParams();
  const history = useHistory();
  const { pizzeriaName, pizzeriaLocation } = useParams();

  useEffect(() => {
    const pizzeria = pizzerias.find(pizzeria => pizzeria.fields.name === pizzeriaName)
    const loc = pizzerias.find(loc => loc.fields.location === pizzeriaLocation)
    setPizzeria(pizzeria);
    setLocation(loc);

  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields =

    {
      rating: rating
    }


    await axios.patch(`${URL}/${pizzeria.id}`, { fields }, config);
    history.push(`/pizzerias`);
  }
  return (
    <div>
      <h1>Leave a Review!</h1>
      <h3> {pizzeriaName} </h3>
      <h4> {pizzeriaLocation}</h4>
      <form onSubmit={handleSubmit}>
        <label>Leave Review</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        <br />
        <button>Submit</button>
      </form>

    </div>
  )
}


export default LeaveReview;
