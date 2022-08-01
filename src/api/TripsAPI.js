const baseTripsURL = "http://localhost:3500/trips";

export const getTrips = async () => {
    const response = await fetch(baseTripsURL, {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });
    const data = await response.json();
    
    return data;
};
