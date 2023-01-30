import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container'>
            <h1 className='text-white mt-4'>Review</h1>
            <div className='reviews-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;