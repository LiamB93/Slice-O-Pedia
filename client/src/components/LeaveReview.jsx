import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import Form from "./Form";


const base = process.env.REACT_APP_AIRTABLE_BASE
const key = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${base}/pizzerias`
const config = {
  headers: {
    Authorization: `Bearer ${key}`
  }
};

function LeaveReview() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);

  const history = useHistory();
  const { id } = useParams;

  useEffect(() => {
    const getPizzerias = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      const { fields } = res.data;
      setName(fields.name);
      setLocation(fields.location);
      setRating(fields.rating);
    };
    getPizzerias();
    // eslint-disable-next-line
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      rating,
    };

    const res = await axios.patch(`${URL}/${id}`, { fields }, config);
    console.log(res.data);
    history.push("/pizzerias/");
  }
  return (
    <div>
      <h1>Leave a Review!</h1>
      <Form
        name={name}
        setName={setName}
        location={location}
        setLocation={setLocation}
        rating={rating}
        setRating={setRating}
        handleSubmit={handleSubmit}
        type={"Edit"}
      />

    </div>
  )
}


export default LeaveReview;
