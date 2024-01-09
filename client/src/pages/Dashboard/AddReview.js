import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);

    const hanldeReview = event => {
        event.preventDefault();
        const email = user.email;
        const displayName = user.displayName;
        const reviewText = event.target.reviewText.value;
        const rating = event.target.rating.value;
        if (rating === 'Select rating star') {
            return toast.error('Please select star');
        };

        const review = {email, displayName, rating, reviewText};

        fetch(`${process.env.REACT_APP_API}/review`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Your review add successfully. Check 'Home' page");
            event.target.reset();
        })
    };
    return (
        <section className='px-3'>
            <h2 className='mb-4 text-center text-xl font-semibold text-accent'>Add Review</h2>
            <div className="card mx-auto mt-5 md:w-2/3 w-full text-center glass p-5">

                <form onSubmit={hanldeReview}>
                    <label className='block text-lg font-medium mb-2' htmlFor="rate">Rate us <i className="fa-solid fa-star"></i></label>
                    <select required name='rating' className="select select-warning w-full max-w-xs">
                        <option disabled selected>Select rating star</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <div>
                        <label className='block text-lg font-medium mt-8 mb-2' htmlFor="review">Review Area</label>
                        <textarea required name='reviewText' id='review' className="textarea w-full textarea-bordered" placeholder="Write a review"></textarea>
                    </div>
                    <input className='btn btn-secondary mt-5 px-10 tracking-widest' type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default AddReview;