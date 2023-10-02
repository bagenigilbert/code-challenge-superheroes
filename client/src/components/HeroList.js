// HeroList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'http://127.0.0.1:5003';

function HeroList() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/heroes`)
      .then(response => {
        setHeroes(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Heroes List</h2>
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>
            <Link to={`/heroes/${hero.id}`}>{hero.name} ({hero.super_name})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroList;
