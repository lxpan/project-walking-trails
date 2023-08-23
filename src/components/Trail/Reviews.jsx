import React from 'react';
import ReviewHistogram from './ReviewHistogram';
import '../../styles/Trail/Reviews.css';

import profilePic from '../../assets/images/trail/account.png';
import reviewStarGold from '../../assets/images/trail/star.png';
import reviewStarWhite from '../../assets/images/trail/starWhite.png';

function Reviews({ reviews }) {
    if (!reviews) {
        return <h1 style={{ fontSize: 40 }}>Loading reviews...</h1>;
    }

    const reviewStats = {
        ratings: Object.values(reviews).map((review) => review.rating),
        length() {
            return this.ratings.length;
        },
        sum() {
            return this.ratings.reduce((accum, currentVal) => accum + currentVal, 0);
        },
        mean() {
            return this.sum() / this.length();
        },
    };

    // console.log(reviewStats.ratings);
    console.log(reviewStats.length());
    console.log(reviewStats.sum());
    console.log(reviewStats.mean());

    const maxReviewRating = 5;
    // iteratively add stars equal to rating, then fill to max with 'blank' stars
    const renderRatingStars = (rating) => Array.from(
        {
            length: maxReviewRating,
        },
        (_, i) => (i < rating ? (
            <img key={i} src={reviewStarGold} alt=""></img>
        ) : (
            <img key={i} src={reviewStarWhite} alt=""></img>
        )),
    );

    // Map through reviews object and render each review as a user post
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
            <div className="trail-review-stats">
                <ReviewHistogram />
                <div>{`Average Rating: ${reviewStats.mean().toFixed(1)}`}</div>
            </div>
            <h2>User Reviews</h2>
            <div className="trail-reviews-container">{reviewsMap}</div>
        </div>
    );
}

export default Reviews;
