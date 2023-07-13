/* MapCore is a higher-order component (HOC) that contains the core Map functionality */
import { React, useState } from 'react';

const palette = require('tailwindcss/colors'); // eslint-disable-line

const COLOURS = [
    palette.blue[500],
    palette.indigo[500],
    palette.orange[400],
    palette.emerald[500],
    palette.purple[500],
    palette.red[500],
];

const mapCentre = {
    lat: 143.9221,
    lng: -37.655,
};

const withExplore = (OriginalComponent) => {
    function NewComponent() {
        // render OriginalComponent and pass on its props.
        return <OriginalComponent colours={COLOURS} mapCentre={mapCentre} />;
    }
    return NewComponent;
};

export default withExplore;
