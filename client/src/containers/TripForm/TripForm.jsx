import "./TripForm.css";
import "./Calendar.css";
import { addTrip } from "../../api/TripsAPI";
import { getCountryNames } from "../../api/CountriesAPI";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";

const TripForm = ({ setTrips }) => {
    const [displayForm, setDisplayForm] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [trip, setTrip] = useState({
        imgUrl: "",
        country: "",
        destinationName: "",
        tripNotes: "",
        tripDate: [new Date(), new Date()],
    });

    useEffect(() => {
        const fetchCountries = async () => {
            const countries = await getCountryNames();

            setCountryList(countries);
        }

        fetchCountries();
    }, []);

    const handleForm = (event) =>
        setTrip((prevTrip) => ({
            ...prevTrip,
            [event.target.name]: event.target.value,
        }));

    const canSaveTrip =
        Boolean(trip.country) &&
        Boolean(trip.destinationName) &&
        Boolean(trip.tripNotes) &&
        Boolean(trip.imgUrl);

    const uploadTrip = async (e) => {
        e.preventDefault();

        const newTrip = await addTrip({
            country: trip.country,
            startDate: trip.tripDate[0].toISOString(),
            finishDate: trip.tripDate[1].toISOString(),
            destinationName: trip.destinationName,
            imgUrl: trip.imgUrl,
            tripNotes: trip.tripNotes,
        });

        setTrip({
            imgUrl: "",
            country: "",
            destinationName: "",
            tripNotes: "",
            tripDate: [new Date(), new Date()],
        });

        setTrips((oldTrips) => [...oldTrips, newTrip]);
        setDisplayForm(false);
    };

    const countryOptions = (
        <select
            className="form-input_field"
            name="country"
            id="country"
            value={trip.country}
            onChange={handleForm}
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
                {countryOptions}
            </div>
            <div className="form-input">
                <label htmlFor="img-url">Image Url: </label>
                <input
                    className="form-input_field"
                    name="imgUrl"
                    id="img-url"
                    type="text"
                    placeholder="https://images.com/123uaushaWJHb"
                    value={trip.imgUrl}
                    onChange={handleForm}
                />
            </div>
            <div className="form-input">
                <label htmlFor="destination-name">Destination Name: </label>
                <input
                    className="form-input_field"
                    name="destinationName"
                    id="destination-name"
                    type="text"
                    placeholder="Mount Fuji..."
                    value={trip.destinationName}
                    onChange={handleForm}
                />
            </div>
            <label htmlFor="date">Dates: </label>
            <Calendar
                id="date"
                selectRange
                className="form-input_field"
                value={trip.tripDate}
                onChange={(value, event) =>
                    handleForm({
                        ...event,
                        target: {
                            ...event.target,
                            name: "tripDate",
                            value,
                        },
                    })
                }
            />
            <div className="form-input">
                <label htmlFor="notes">Trip Notes: </label>
                <textarea
                    className="form-input_field"
                    name="tripNotes"
                    id="tripNotes"
                    placeholder="Amazing reunion trip with my college friends..."
                    value={trip.tripNotes}
                    onChange={handleForm}
                />
            </div>
            <button
                disabled={!canSaveTrip}
                className="submit-btn"
                onClick={uploadTrip}
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
