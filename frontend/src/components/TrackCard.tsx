import React from 'react';
import {Track} from "../model/Track";

type Props = {
    track: Track
}

function TrackCard(props:Props) {
    return (
        <div>
            <header><h1>{props.track.trackName}</h1></header>
        </div>
    );
}

export default TrackCard;