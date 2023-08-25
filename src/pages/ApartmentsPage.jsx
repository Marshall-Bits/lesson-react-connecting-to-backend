// src/pages/ApartmentsPage.jsx

import { useState, useEffect } from "react";     // <== IMPORT useEffect

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
  const apiUrl = "https://ironbnb-m3.herokuapp.com/apartments"

  useEffect(() => {                                // <== ADD THE EFFECT
    fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => setApartments(data))
    .catch((err) => console.log(err))
    
  }, [] );  // <- [] means: Run the effect only once, after initial render

  
  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
      
    </div>
  );
}

export default ApartmentsPage;
