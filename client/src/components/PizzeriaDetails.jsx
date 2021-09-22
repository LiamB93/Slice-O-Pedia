import { useState, useEffect } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";

function PizzeriaDetails() {
  const [pizzeria, setPizzeria] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getPizzeria = async () => {

    }
  })
  return (
    <div>

    </div>
  )
}
export default PizzeriaDetails;
