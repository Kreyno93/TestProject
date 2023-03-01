import React, {useEffect} from 'react';
import axios from "axios/index";

export default function BikeHooks() {

    const [tracks, setTracks] = React.useState([]);

    function getAllTracks() {
        axios.get("/api/tracks")
            .then(response => {
                setTracks(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
        useEffect(getAllTracks, [])

        function addTrack(trackName:string) {
            axios.post("/api/tracks", trackName)}


    return {getAllTracks, addTrack, tracks}
}
