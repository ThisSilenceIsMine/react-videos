import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyAEOYKVCyhFRcqwLHw-BfJhT6I9RnosGG0";

const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultTerm);
    }, [defaultTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: "video",
                key: KEY,
            },
        });

        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;
