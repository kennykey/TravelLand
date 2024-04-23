import { useState } from "react";
import axios from "axios";

export default function useActivities() {
    const [loading, setLoading] = useState(false);
    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        setLoading(true);
        try {
            const resp = await axios.get(
                "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities",{
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setActivities(resp.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    return { getActivities, loading, activities };
}