import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/review`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <section className='py-20'>
            <h2 className='text-5xl text-center font-medium text-secondary mb-14'>Happy Clients <i className="fa-regular fa-face-smile"></i></h2>
            <div className="grid items-center lg:grid-cols-3 md:grid-cols-2 gap-10 w-10/12 mx-auto">
                {
                    reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
        </section>
    );
};

export default Reviews;