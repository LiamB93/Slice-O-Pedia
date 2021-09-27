import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import DeleteButton from "./DeleteButton";



const base = process.env.REACT_APP_AIRTABLE_BASE
const key = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${base}/pizzerias`
const config = {
  headers: {
    Authorization: `Bearer ${key}`
  }
};

function LeaveReview(props) {
  const [rating, setRating] = useState(0);
  const [pizzeria, setPizzeria] = useState({});
  const { pizzerias } = props
  const history = useHistory();
  const { pizzeriaName } = useParams();

  useEffect(() => {
    const pizzeria = pizzerias.find(pizzeria => pizzeria.fields.name === pizzeriaName)
    setPizzeria(pizzeria);


    // eslint-disable-next-line
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
    <div className="font-mono text-3xl m-10">
      <h1 className="flex justify-center text-4xl">Update your Review</h1>
      <h3 className="flex justify-center text-5xl"> {pizzeriaName} </h3>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <label>Leave Review</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        <br />
        <button>Update</button>
      </form>
      <div className="flex justify-center text-4xl">
        <DeleteButton pizzeria={pizzeria} />
      </div>
    </div>

  )
}


export default LeaveReview;
