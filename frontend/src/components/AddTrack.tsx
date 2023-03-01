import axios from "axios";
import {ChangeEvent, FormEvent, useState} from "react";

type Props = {
    getAllTracks: () => void
}

export default function AddTrack(props:Props) {

    const [track, setTrack] = useState<string>("");

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setTrack(event.target.value)
    }

    function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post('/api/add-track',{trackName: track}).then(props.getAllTracks)
        setTrack('')
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" onChange={onChangeHandler} value={track}/>
                <button>Add</button>
            </form>
        </div>
    );
}