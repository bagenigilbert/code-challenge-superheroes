import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function Power({ apiBaseUrl }) {
  const [{ data: power, error, status }, setPower] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiBaseUrl}/powers/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Power not found");
      })
      .then((data) => {
        setPower({ data, error: null, status: "resolved" });
      })
      .catch((err) => {
        setPower({ data: null, error: err.message, status: "rejected" });
      });
  }, [apiBaseUrl, id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error}</h1>;

  return (
    <section>
      <h2>{power.name}</h2>
      <p>{power.description}</p>
      <p>
        <Link to="/hero_powers/new">Add Hero Power</Link>
      </p>
      <p>
        <Link to={`/powers/${power.id}/edit`}>Edit Power Description</Link>
      </p>
    </section>
  );
}

export default Power;
