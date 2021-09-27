import axios from "axios";
import React from "react";
import { useHistory } from "react-router";

const base = process.env.REACT_APP_AIRTABLE_BASE;
const key = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${base}/pizzerias`;
const config = {
  headers: {
    Authorization: `Bearer ${key}`,
  },
};

function DeleteButton(props) {
  const history = useHistory();
  console.log(props);

  const handleDelete = async (id) => {
    const res = await axios.delete(`${URL}/${props.pizzeria.id}`, config);
    history.push("/pizzerias");
    return res.data;

  };

  return <button onClick={handleDelete}>Delete Pizzeria</button>;
}

export default DeleteButton;
