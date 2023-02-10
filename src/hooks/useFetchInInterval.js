import { useEffect, useState } from "react";

const useFetchInInterval = ({ request, intervalMS }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const sendRequest = async (interval) => {
            setUpdating(true);
            try {
                const response = await request();
                if (!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(true);
                clearInterval(interval);
            } finally {
                setUpdating(false);
                setLoading(false);
            }
        };

        sendRequest();
        const interval = setInterval(() => sendRequest(interval), intervalMS);
        return () => clearInterval(interval);
    }, [intervalMS, request]);

    return { data, error, loading, updating };
};

export default useFetchInInterval;