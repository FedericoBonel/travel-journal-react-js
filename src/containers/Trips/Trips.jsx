import "./Trips.css";
import Trip from "../../components/Trip/Trip";

const Trips = ({ trips }) => {
    const renderedTrips = trips.map((trip) => <Trip trip={trip} />);

    return (
        <div className="trips-container">
            <div className="trips-container_list">{renderedTrips}</div>
        </div>
    );
};

export default Trips;
