import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HeroDetail() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5003/heroes/${id}`)
      .then(response => {
        setHero(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);

  if (!hero) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{hero.name} ({hero.super_name})</h2>
      <p>Powers:</p>
      <ul>
        {hero.powers.map(power => (
          <li key={power.id}>{power.name} - {power.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default HeroDetail;
