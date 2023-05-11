import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from '../overmind';
import { capitalise } from '../utils/utils';
import '../styles/Trail.css';

function Trail() {
    const { id } = useParams();
    const { trails, locations } = useAppState();

    /* React state variables are used to enable conditional rendering since
    Overmind state variables don't load on time if the Trail page URL is accessed
    directly (as opposed to the normal flow of accessing the Trail's page through Home) */
    const [trail, setTrail] = useState();
    const [loc, setLoc] = useState();

    useEffect(() => {
        setTrail(trails[id]);
    }, [trails]);

    /* This useEffect hook is called when either trail or locations is updated,
    ensuring that loc (which is dependent on trail) is set after trail has been set */
    useEffect(() => {
        if (trail) {
            setLoc(locations[trail.area]);
        }
    }, [trail, locations]);

    if (!(trail && loc)) {
        // placeholder loading message
        return <h1 style={{ fontSize: 100 }}>Loading...</h1>;
    }

    return (
        <div className="Trail">
            {trail && (
                <div className="Trail-contents">
                    <div className="trail-breadcrumbs">
                        {`${capitalise(loc?.country ?? 'Loading')} > ${capitalise(
                            loc?.state ?? 'Loading',
                        )} > ${loc?.name ?? 'Loading'} > ${trail.name}`}
                    </div>
                    <div className="trail-header">
                        <h2 className="trail-header-trail-heading">{trail.name}</h2>
                        <span className="trail-header-trail-difficulty">
                            {capitalise(trail.difficulty)}
                        </span>
                        <span className="trail-header-trail-area">{loc?.name ?? 'Loading'}</span>
                    </div>
                    <p>{trail.description}</p>
                </div>
            )}
        </div>
    );
}

export default Trail;
