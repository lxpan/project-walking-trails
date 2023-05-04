import React from 'react';
import { useParams } from 'react-router-dom';

function Trail() {
    const { id } = useParams();
    return (
        <div className="Trail">
            <h1>{id}</h1>
        </div>
    );
}

export default Trail;
