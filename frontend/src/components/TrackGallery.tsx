import React from 'react';
import {Track} from "../model/Track";
import TrackCard from "./TrackCard";
import AddTrack from "./AddTrack";
import MapAPI from "./MapAPI";
import '../styling/TrackGallery.css'

type Props = {
    tracks: Track[]
    getAllTracks: () => void
}

function TrackGallery(props: Props) {

    return (
        <>
        <h1>Track Gallery</h1>
            <AddTrack getAllTracks={props.getAllTracks}/>
    <nav>
        <ul>
            <li>
                <a href={"/"}>Home</a>
            </li>
        </ul>
    </nav>
            <div className={"gallery-wrapper"}>
                {props.tracks.map(track => <TrackCard track={track} key={track.id}/>)}
            </div>
            <MapAPI/>
        </>
    );
}

export default TrackGallery;