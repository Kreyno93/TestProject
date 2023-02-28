import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/tracks"} element={<TrackGallery/>}/>
            </Routes>
        </div>
    )
}

export default App
