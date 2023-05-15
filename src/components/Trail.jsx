import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

    const breadcrumbs = {
        country: capitalise(loc?.country ?? 'Loading'),
        state: capitalise(loc?.state ?? 'Loading'),
        location: loc?.name ?? 'Loading',
        trailName: trail.name,
    };

    return (
        <div className="Trail">
            {trail && (
                <div className="Trail-contents">
                    <div className="trail-breadcrumbs">
                        {breadcrumbs.country} &gt; {breadcrumbs.state} &gt;{' '}
                        <Link to={`/location/${loc.id}`} className="trail-location-link">
                            {breadcrumbs.location}
                        </Link>{' '}
                        &gt; {breadcrumbs.trailName}
                    </div>
                    <div className="trail-body">
                        <div className="trail-header">
                            <h2 className="trail-header-trail-heading">{trail.name}</h2>
                            <span className="trail-header-trail-difficulty">
                                {capitalise(trail.difficulty)}
                            </span>
                            <span className="trail-header-trail-area">
                                <Link to={`/location/${trail.area}`}>{loc?.name ?? 'Loading'}</Link>
                            </span>
                        </div>
                        <div className="trail-info">
                            <div className="trail-stats">
                                <div className="trail-stats-column">
                                    <span className="trail-stats-label">Distance</span>
                                    <span className="trail-stats-value">{`${trail.distance} km`}</span>
                                </div>
                                <div className="trail-stats-column">
                                    <span className="trail-stats-label">Elevation</span>
                                    <span className="trail-stats-value">{`${trail.elevation_gain} m`}</span>
                                </div>
                                <div className="trail-stats-column">
                                    <span className="trail-stats-label">Type</span>
                                    <span className="trail-stats-value">
                                        <span className="trail-stats-value">
                                            {capitalise(trail.type)}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="trail-description">{trail.description}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Trail;
