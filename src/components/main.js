import {useEffect, useState} from "react";
import axios from "axios";
import requests from "../request";


const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios
            .get(requests._popular)
            .then(res => {
                if (res.status === 200) {
                    setMovies(res.data.results)
                }
            })
    }, [])

    console.log(movies)

    return (
        <div>

        </div>
    );
};

export default Main;