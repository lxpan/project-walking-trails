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

const MapCore = (OriginalComponent) => {
    function NewComponent() {
        // render OriginalComponent and pass on its props.
        return <OriginalComponent colours={COLOURS} />;
    }
    return NewComponent;
};

export default MapCore;
