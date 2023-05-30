import React from 'react';
import { capitalise } from '../../utils/utils';

function TrailSummary({ trail, loc }) {
    let summary = '';
    let distAreaString = '';
    let diffString = '';
    let goodForString = '';
    let timeString = '';

    if (trail.distance && loc.name) {
        distAreaString += `Enjoy this ${trail.distance} km trail near ${loc.name}, ${capitalise(
            loc.state,
        )}. `;
    }

    if (trail.difficulty) {
        // use 'an' if the difficulty is 'easy'
        const article = trail.difficulty === 'easy' ? 'an' : `a`;
        diffString = `Generally considered ${article} ${trail.difficulty} route, `;
    }

    // todo: uncapitalise tags
    // todo: substitute "Dogs on leash" with "dog walking"
    goodForString = `${trail.tags[0]}, ${trail.tags[1]} and ${trail.tags[2]}`;

    // todo: fill in with expected time taken
    timeString += `it takes an average of XhY min to complete. This is a very popular area for ${goodForString}, so you'll likely encounter other people.`;

    summary += distAreaString + diffString + timeString;

    return <div className="TrailSummary trail-description">{summary}</div>;
}

export default TrailSummary;
