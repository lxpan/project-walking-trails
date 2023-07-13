import React from 'react';
import withExplore from './WithExplore';
import MapCore from './MapCore';

const ExploreMap = withExplore(MapCore);

function Explore() {
    return (
        <div className="Explore">
            <h1>Explore</h1>
            <ExploreMap />
        </div>
    );
}

export default Explore;
