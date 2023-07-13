/* MapCore is a higher-order component (HOC) that contains the core Map functionality */
import { React } from 'react';
import { useAppState } from '../../overmind';

const palette = require('tailwindcss/colors');

const COLOURS = [
    palette.blue[500],
    palette.indigo[500],
    palette.orange[400],
    palette.emerald[500],
    palette.purple[500],
    palette.red[500],
];

// needs to be made dependent on the trail in focus
const mapCentre = {
    lat: 143.9221,
    lng: -37.655,
};

// const route id = get from props or args

const withTrail = (OriginalComponent, id) => {
    function NewComponent() {
        const { routes } = useAppState();
        console.log(routes);
        const trailRoute = routes.filter((route) => route.id === id);
        console.log(trailRoute);
        // render OriginalComponent and pass on its props.
        return <OriginalComponent routes={trailRoute} colours={COLOURS} mapCentre={mapCentre} />;
    }
    return NewComponent;
};

export default withTrail;
