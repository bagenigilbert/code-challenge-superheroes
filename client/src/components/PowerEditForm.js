import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";

function PowerEditForm({ apiBaseUrl }) {
  const [{ data: power, errors, status }, setPower] = useState({
    data: null,
    errors: [],
    status: "pending",
  });
  const [description, setDescription] = useState("");
  const history = useHistory();
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
        setPower({ data, errors: [], status: "resolved" });
        setDescription(data.description);
      })
      .catch((err) => {
        setPower({ data: null, errors: [err.message], status: "rejected" });
      });
  }, [apiBaseUrl, id]);

  if (status === "pending") return <h1>Loading...</h1>;

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${apiBaseUrl}/powers/${power.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    }).then((response) => {
      if (response.ok) {
        history.push(`/powers/${power.id}`);
      } else {
        response.json().then((err) =>
          setPower({ data: power, errors: err.errors, status: "rejected" })
        );
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editing {power.name}</h2>
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.length > 0
        ? errors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Update Power</button>
    </form>
  );
}

export default PowerEditForm;
