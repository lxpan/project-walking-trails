import React from 'react';
import { Link } from 'react-router-dom';
import placeholderThumbnail from '../assets/images/alltrails-sized-placeholder.jpg';
import { unslugify, capitalise } from '../utils/utils';
import '../styles/TrailCard.css';

function TrailCard({ trail }) {
    return (
        <Link to={`/trail/${trail.id}`} className="trail-card">
            <figure>
                <img src={placeholderThumbnail} alt="" />
            </figure>
            <div className="TrailCard-difficulty-ratings">
                {trail.difficulty ? capitalise(trail.difficulty) : 'Loading...'}
            </div>
            <div className="card-body">
                <div className="TrailCard-trail-name">{trail.name}</div>
                <div className="TrailCard-trail-area">
                    {trail.area ? unslugify(trail.area) : 'Loading...'}
                </div>
                <div className="TrailCard-trail-length">Length: {trail.distance} km</div>
            </div>
        </Link>
    );
}

export default TrailCard;
