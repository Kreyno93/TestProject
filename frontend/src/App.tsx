import './App.css'
import {Track} from "./model/Track";
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import TrackGallery from "./components/TrackGallery";

function App() {

    const [tracks, setTracks] = useState<Track[]>([]);

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


    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/tracks"} element={<TrackGallery tracks={tracks} getAllTracks={getAllTracks}/>}/>
            </Routes>
        </div>
    )
}

export default App
