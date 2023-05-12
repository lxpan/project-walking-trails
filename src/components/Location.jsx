import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState, useActions } from '../overmind';
import '../styles/Location.css';

function Location() {
    const { id } = useParams();
    const { trails, loading } = useAppState();

    // trails that belong in the location
    const getTrailsFromLocation = () => {
        const filter = Object.values(trails).filter((trail) => trail.area === id);
        return filter;
    };

    useEffect(() => {
        console.log(trails);
    }, [trails]);

    return (
        <div className="Location">
            <h1>Walking Trails in {id}</h1>

            <div className="Location-top-trails-list">
                {!trails.loading ?
                    getTrailsFromLocation().map((trail) => (
                        <div className="trail-listing" key={trail.id}>
                            <h3>{trail.name}</h3>
                        </div>
                    )) :
                    'Loading...'}
            </div>
        </div>
    );
}

export default Location;
