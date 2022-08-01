import React from "react";
import "./Trips.css";
import Trip from "../../components/Trip/Trip";

let Trips = ({ trips }) => {
    const renderedTrips = trips.map((trip) => <Trip trip={trip} key={trip.id}/>);

    return (
        <div className="trips-container">
            <div className="trips-container_list">{renderedTrips}</div>
        </div>
    );
};

export default React.memo(Trips);
