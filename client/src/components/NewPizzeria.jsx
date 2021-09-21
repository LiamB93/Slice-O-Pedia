import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useHistory } from "react-router";

const base = process.env.REACT_APP_AIRTABLE_BASE
const key = process.env.REACT_APP_AIRTABLE_KEY

const postURL = `https://api.airtable.com/v0/${base}/pizzerias`
const config = {
  headers: {
    Authorization: `Bearer ${key}`
  }
};

function NewPizzeria() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      location,
      rating,
    };
    const res = await axios.post(postURL, { fields }, config);
    console.log(res.data);
    history.push("/");

  }
  return (
    <div>
      <h1>Submit a Pizzeria!</h1>
      <Form
        name={name}
        setName={setName}
        location={location}
        setLocation={setLocation}
        rating={rating}
        setRating={setRating}
        handleSubmit={handleSubmit}
        type={"submit"}
      />
    </div>
  )
}

export default NewPizzeria;
