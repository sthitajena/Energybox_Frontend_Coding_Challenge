const baseUrl = `https://api.wmata.com`;

const headers = { api_key: "4d3f790e83b147c09673cac8292f058c" };

export const getTrainPositions = () => {
    return fetch(`${baseUrl}/TrainPositions/TrainPositions?contentType=json`, {
        method: "GET",
        headers,
    });
};