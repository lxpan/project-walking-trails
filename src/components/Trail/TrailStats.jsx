import React from 'react';
import { capitalise } from '../../utils/utils';

function TrailStats({ trail }) {
    return (
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
                    <span className="trail-stats-value">{capitalise(trail.type)}</span>
                </span>
            </div>
        </div>
    );
}

export default TrailStats;
