import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home({ apiBaseUrl }) {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}/heroes`)
      .then((response) => response.json())
      .then(setHeroes);
  }, [apiBaseUrl]);

  return (
    <section>
      <h2>All Heroes</h2>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/heroes/${hero.id}`}>{hero.super_name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
