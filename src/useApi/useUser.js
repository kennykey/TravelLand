import { useState } from "react";
import axios from "axios";

export default function useUser() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);

    const getUser = async () => {
        setLoading(true);
        try {
            const resp = await axios.get(
                "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user", {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    },
                }
            );
            setUser(resp.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    return { getUser, loading, user };
}