// PowerList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5003';

function PowerList() {
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/powers`)
      .then(response => {
        setPowers(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Powers List</h2>
      <ul>
        {powers.map(power => (
          <li key={power.id}>
            {power.name} - {power.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PowerList;
