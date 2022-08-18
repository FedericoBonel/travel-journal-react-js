import React from "react";
import "./Trip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

let Trip = ({ trip }) => {
    const startDate = new Date(trip.startDate);
    const finishDate = new Date(trip.finishDate);

    return (
        <article className="trip-container">
            <div className="trip-container_content">
                <img src={trip.imgUrl ? trip.imgUrl : "https://placehold.jp/150x150.png"} alt="trip-img" />
                <div className="trip-container_content-text">
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

export default React.memo(Trip);;
