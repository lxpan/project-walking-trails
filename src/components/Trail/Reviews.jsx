import React from 'react';
import ReviewStats from './ReviewStats';
import '../../styles/Trail/Reviews.css';

import profilePic from '../../assets/images/account.png';

function Reviews({ reviews }) {
    if (!reviews) {
        return <h1 style={{ fontSize: 100 }}>Loading...</h1>;
    }

    const reviewsMap = Object.values(reviews).map((review, index) => (
        <div key={index} className="trail-review-div">
            <div className="trail-review-header">
                <img src={profilePic} alt="" />
                <span>{review.username}</span>
                <span>{review.date}</span>
            </div>
            <span>{review.rating}</span>
            <span>{review.comment}</span>
            <div className="trail-section-divider"></div>
        </div>
    ));

    return (
        <div className="trail-reviews">
            <h2>Review Component</h2>
            <ReviewStats />
            <h2>User Reviews</h2>
            <div className="trail-reviews-container">{reviewsMap}</div>
        </div>
    );
}

export default Reviews;
