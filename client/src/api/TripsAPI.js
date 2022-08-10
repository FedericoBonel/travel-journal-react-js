const TRIPS_URL = "http://localhost:8080/api/v1/trips";

export const getTrips = async () => {
    try {
        const response = await fetch(TRIPS_URL, {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export const addTrip = async (trip) => {
    try {
        const response = await fetch(TRIPS_URL, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(trip),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};
