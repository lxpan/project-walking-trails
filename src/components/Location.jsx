import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from '../overmind';
import TrailCard from './TrailCard';
import { unslugify, capitalise } from '../utils/utils';
import '../styles/Location.css';

function Location() {
    const { id } = useParams();
    const { trails, locations, loading } = useAppState();

    // trails that belong in the location
    const getTrailsFromLocation = () => {
        const filter = Object.values(trails).filter((trail) => trail.area === id);
        return filter;
    };

    const loc = locations[id];

    const location = {
        country: capitalise(loc?.country ?? 'Loading'),
        state: capitalise(loc?.state ?? 'Loading'),
        location: loc?.name ?? 'Loading',
    };

    useEffect(() => {
        // console.log(trails);
    }, [trails]);

    return (
        <div className="Location">
            <div className="Location-trail-card-grid">
                <h1 className="Location-trail-card-grid__heading">
                    Walking trails near {location.location}
                </h1>
                {!loading ?
                    getTrailsFromLocation().map((trail) => (
                        <TrailCard key={trail.id} trail={trail} />
                    )) :
                    'Loading...'}
            </div>
        </div>
    );
}

export default Location;
