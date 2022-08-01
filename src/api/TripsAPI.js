const baseTripsURL = "http://localhost:3500/trips";

export const getTrips = async () => {
    try {
        const response = await fetch(baseTripsURL, {
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
        const response = await fetch(baseTripsURL, {
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
