const COUNTRIES_API = "http://localhost:8080/api/v1/countries";

export const getCountryNames = async () => {
    try {
        const response = await fetch(COUNTRIES_API, {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
