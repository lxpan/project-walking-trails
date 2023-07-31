import React from 'react';
import ReviewStats from './ReviewStats';
import '../../styles/Trail/Reviews.css';

function Reviews({ trail }) {
    return (
        <div className="trail-reviews">
            <h2>Review Component</h2>
            <ReviewStats />
            <h2>User Reviews</h2>
        </div>
    );
}

export default Reviews;
