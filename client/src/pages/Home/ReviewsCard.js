import React, { useState } from 'react';

const ReviewsCard = ({ review }) => {
    const { displayName, rating, reviewText } = review;

    return (
        <div className="card w-full z-0 h-full shadow-lg image-full">
            <div className="card-body bg-emerald-50 text-center">
                <h2 className="text-2xl text-accent font-medium">{displayName}</h2>
                <h5 className='text-xl'>
                    {rating === '5' && <>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                    </>}
                    {rating === '4' && <>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                    </>}
                    {rating === '3' && <>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                    </>}
                    {rating === '2' && <>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                    </>}
                    {rating === '1' && <>
                        <i className="fa-solid fa-star text-orange-400"></i>
                    </>}
                </h5>
                <p className='text-lg text-gray-600'>{reviewText}</p>
            </div>
        </div>
    );
};

export default ReviewsCard;