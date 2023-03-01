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
            <BingMapsReact bingMapsKey="AozSPC4DDD2jhEB0hh8nIMx130qiO1lBUrXpQiJpA6b3fDlNgfhN3pYQ_2UU0Qx9"
                           height="100rem"
                           mapOptions={{
                               navigationBarMode: "square",
                           }}
                           width="100%"
                           viewOptions={{
                               center: {latitude: 42.360081, longitude: -71.058884},
                           }}
                           pushPins={[pushPin]}
            />
        </div>
    );
}

export default MapApi;