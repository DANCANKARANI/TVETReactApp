import React, { useState, useEffect } from 'react';
import { AvailableJobs } from './Jobs';

function FetchJobs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/view/jobs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data)
        setLoading(false);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {data.map(available=>
        <AvailableJobs
          key={available.key}
          title={available.title}
          role={available.role}
          apply={available.apply}
        />)}
    </div>
  );
}

export default FetchJobs;
