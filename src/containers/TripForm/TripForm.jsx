import "./TripForm.css";
import "./Calendar.css";
import { countryList } from "./Countries";
import { addTrip } from "../../api/TripsAPI";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";

const TripForm = ({ trips, setTrips }) => {
    const [displayForm, setDisplayForm] = useState(false);
    const [imgUrl, setImgUrl] = useState("");
    const [country, setCountry] = useState("");
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");
    const [tripDate, setTripDate] = useState([new Date(), new Date()]);

    const canSaveTrip =
        Boolean(country) && Boolean(name) && Boolean(notes) && Boolean(imgUrl);

    const uploadTrip = async (e) => {
        e.preventDefault();

        const newTrip = await addTrip({
            country,
            startDate: tripDate[0].toISOString(),
            finishDate: tripDate[1].toISOString(),
            destinationName: name,
            imgUrl,
            tripNotes: notes,
        });

        setCountry("");
        setName("");
        setNotes("");
        setImgUrl("");
        setTripDate([new Date(), new Date()]);

        setTrips([...trips, newTrip]);

        console.log("New trip added!");
    };

    const renderedCountries = (
        <select
            className="form-input_field"
            name="country"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
        >
            <option>-- Destination country --</option>
            {countryList.map((country) => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </select>
    );

    const form = displayForm && (
        <form className="form-container_form-content swing-in-top-fwd">
            <div className="form-input">
                <label htmlFor="country">Country: </label>
                {renderedCountries}
            </div>
            <div className="form-input">
                <label htmlFor="destination-name">Image Url: </label>
                <input
                    className="form-input_field"
                    id="img-url"
                    type="text"
                    placeholder="https://images.com/123uaushaWJHb"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label htmlFor="destination-name">Destination Name: </label>
                <input
                    className="form-input_field"
                    id="destination-name"
                    type="text"
                    placeholder="Mount Fuji..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <label htmlFor="date">Dates: </label>
            <Calendar
                id="date"
                onChange={setTripDate}
                value={tripDate}
                selectRange
                className="form-input_field"
            />
            <div className="form-input">
                <label htmlFor="notes">Trip Notes: </label>
                <textarea
                    className="form-input_field"
                    id="notes"
                    placeholder="Amazing reunion trip with my college friends..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </div>
            <button
                disabled={!canSaveTrip}
                className="submit-btn"
                onClick={(e) => uploadTrip(e)}
            >
                Add
            </button>
        </form>
    );

    return (
        <div className="form-container">
            <div
                className="form-container_show-btn"
                onClick={() => setDisplayForm(!displayForm)}
            >
                <FontAwesomeIcon icon={faPlusCircle} className="add-btn" />
            </div>
            {form}
        </div>
    );
};

export default TripForm;
