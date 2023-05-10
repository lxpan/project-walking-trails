import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from '../overmind';
import { capitalise, unslugify } from '../utils/utils';
import '../styles/Trail.css';

function Trail() {
    const { id } = useParams();
    const { trails, locations } = useAppState();

    const trail = trails[id];
    const loc = locations[trail.area];
    const locDisplayName = `${loc.name}, ${loc.state}, ${loc.country}`;

    useEffect(() => {
        console.log(trail.area);
        console.log(loc);
    }, [trails]);

    return (
        <div className="Trail">
            <div className="Trail-contents">
                <div className="trail-breadcrumbs">
                    {`${capitalise(loc.country)} > ${capitalise(loc.state)} > ${loc.name} > ${
                        trail.name
                    }`}
                </div>
                <div className="trail-header">
                    <h2 className="trail-header-trail-heading">{trail.name}</h2>
                    <span className="trail-header-trail-difficulty">
                        {capitalise(trail.difficulty)}
                    </span>
                    <span className="trail-header-trail-area">{unslugify(trail.area)}</span>
                </div>
                <p>{trail.description}</p>
            </div>
        </div>
    );
}

export default Trail;
