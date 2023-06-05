import React from 'react';
import './Review.css';
import { AiFillStar } from "react-icons/ai"


const Review = ({ review }) => {
    const { name, description, img } = review;
    return (

        <div className='mt-4'>

            <div className='review-div'>
                <div>
                    <img className='review-img ms-4 mt-3 mb-5' src={img} alt="" />
                </div>
                <div>
                    <h6 className='mt-3 ms-3 me-3'>{name}</h6>
                    <p className='ms-3 me-4'>{description}</p>
                    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                </div>
            </div>

        </div>
    );
};

export default Review;