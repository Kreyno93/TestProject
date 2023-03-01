import React from 'react';
import BingMapsReact from "bingmaps-react";
function MapApi() {
    const pushPin = {
        center: {
            latitude:  42.360081,
            longitude: -71.058884
        },
        options: {
            title: "Dönerbude!!",
        },
    }
    return (

        <div>
            <BingMapsReact bingMapsKey ={process.env.REACT_APP_BING_MAPS_API_KEY}
                           height="100rem"
                           mapOptions={{
                               navigationBarMode: "square",
                           }}
                           width="100%"
                           viewOptions={{
                               center: {latitude: 42.360081, longitude: -71.058884},
                               mapTypeId: "canvasDark",
                           }}
                           pushPins={[pushPin]}
            />
        </div>
    );
}

export default MapApi;