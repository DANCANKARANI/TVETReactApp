import React, { useState,useEffect } from 'react'

import { Availablesponsors } from './Sponsors.jsx'
export const FetchSponsors = () => {
    const [data, setData]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8000/view/sponsors');
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
console.log(data)
  return (
    <div>
        {data.map((available=>
            <Availablesponsors
                key={available.id}
                name={available.name}
                type={available.type}
                apply={available.apply}
            />
        ))}
    </div>
  )
}
