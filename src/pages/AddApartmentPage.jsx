// src/pages/AddApartmentPage.jsx

import { useState } from "react";          // <== IMPORT
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {
    const [headline, setHeadline] = useState("");     // <== ADD
    const [price, setPrice] = useState(1);            // <== ADD
    const navigate = useNavigate()

    const apiUrl = "https://ironbnb-m3.herokuapp.com/apartments";


    function handleSubmit(event) {

        event.preventDefault()

        const body = { title: headline, pricePerDay: price }

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("data: ", data);
                setHeadline("");
                setPrice(1);
                navigate("/apartments")
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="AddApartmentPage">
            <h3>Add New Apartment</h3>

            <form onSubmit={handleSubmit} >
                <label>Title</label>
                <input
                    type="text"
                    name="headline"
                    onChange={(e) => setHeadline(e.target.value)}
                    value={headline}
                />

                <label>Price per Day</label>
                <input
                    type="number"
                    name="pricePerDay"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />

                <button type="submit">Create Apartment</button>

            </form>
        </div>
    );
}

export default AddApartmentPage;
