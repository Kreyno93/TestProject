import React from 'react';
import {Track} from "../model/Track";
import "../styling/TrackCard.css"

type Props = {
    track: Track
}

function TrackCard(props:Props) {
    return (
        <div className={"card-wrapper"}>
            <header><h1>{props.track.trackName}</h1></header>
        </div>
    );
}

export default TrackCard;