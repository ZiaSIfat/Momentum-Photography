import React from 'react';
import './Review.css';
import { AiFillStar } from "react-icons/ai"


const Review = ({ review }) => {
    const { name, description, img } = review;
    return (
        <div className='container mt-4'>
            <div className='review-div container'>
                <div>
                    <img className='review-img ms-2 mt-3' src={img} alt="" />
                </div>
                <div>
                    <h6 className='mt-3 ms-3'>{name}</h6>
                    <p className='ms-5'>{description}</p>
                    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>

                </div>
            </div>
        </div>
    );
};

export default Review;