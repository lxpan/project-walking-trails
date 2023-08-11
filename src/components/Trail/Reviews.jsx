import React from 'react';
import ReviewStats from './ReviewStats';
import '../../styles/Trail/Reviews.css';

import profilePic from '../../assets/images/trail/account.png';
import reviewStarsPic from '../../assets/images/trail/star.png';

function Reviews({ reviews }) {
    if (!reviews) {
        return <h1 style={{ fontSize: 100 }}>Loading...</h1>;
    }

    const renderRatingStars = (rating) => Array.from({ length: rating - 1 }, (_, i) => (
        <img key={i} src={reviewStarsPic} alt=""></img>
    ));

    const reviewsMap = Object.values(reviews).map((review, index) => (
        <div key={index} className="trail-review-div">
            <div className="trail-review-header">
                <img src={profilePic} alt="User profile picture" />
                <div className="trail-review-user-date">
                    <span>{review.username}</span>
                    <span className="trail-review-date">{review.date}</span>
                </div>
            </div>
            <div className="trail-review-rating-stars" title={`Rating of ${review.rating} stars`}>
                {renderRatingStars(review.rating)}
            </div>
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
