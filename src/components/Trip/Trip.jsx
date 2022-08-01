import "./Trip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Trip = ({ trip }) => {
    const startDate = new Date(trip.date);
    const finishDate = new Date(startDate);
    finishDate.setDate(finishDate.getDate() + trip.daysDuration);

    return (
        <article className="trip-container">
            <div className="trip-container_content">
                <img src={trip.imgUrl} alt="trip-img" />
                <div className="trip-container_text">
                    <div className="trip-container_content-text_location">
                        <p>
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                color={"#F55A5A"}
                            />{" "}
                            {trip.country.toUpperCase()}
                        </p>
                        <a
                            href={`http://maps.google.com/?q=${trip.country.replace(
                                " ",
                                "+"
                            )}+${trip.destinationName.replace(" ", "+")}`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h1>{trip.destinationName}</h1>
                    <p className="trip-container_content-text_date">
                        {startDate.toDateString()} - {finishDate.toDateString()}
                    </p>
                    <p className="trip-container_content-text_desc">
                        {trip.tripNotes.length > 200
                            ? `${trip.tripNotes.substring(0, 201)}...`
                            : trip.tripNotes}
                    </p>
                </div>
            </div>
            <hr />
        </article>
    );
};

export default Trip;
