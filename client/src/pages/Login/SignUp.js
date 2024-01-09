import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    const navigate = useNavigate();


    if (user) {
        const displayName = user?.user?.displayName;
        const email = user?.user?.email;
        const admin = 'false';
        const userInfo = {displayName, email, admin};
        fetch(`${process.env.REACT_APP_API}/user/${email}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {});
        navigate('/');
    };


    const handleSignUp = async event => {
        event.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        event.target.reset();
        toast.success('Sign-up Successfully');
    };
    return (
        <section className='flex justify-center bg-slate-200 items-center h-screen'>
            <div className="w-11/12 mx-auto flex justify-center">
                <div className="card lg:w-96 md:w-96 sm:w-96 w-full shadow-xl glass">
                    <div className="card-body pb-0 text-center">
                        <h2 className="text-3xl text-secondary text-center mb-2">Sign-up</h2>
                        <form onSubmit={handleSignUp}>
                            <input ref={nameRef} type="text" placeholder="Your Name" className="input input-bordered w-full mb-5" />
                            <input ref={emailRef} type="email" placeholder="Email Address" className="input input-bordered w-full mb-5" />
                            <input ref={passRef} type="password" placeholder="Password" className="input input-bordered w-full mb-5" />
                            {
                                error ? <p className='text-base text-red-500'>{error.message}</p> : ''
                            }
                            {
                                loading && <p className='pb-2'><Spinner></Spinner></p>
                            }
                            <input className='btn btn-secondary text-white' type="submit" value="Sign up" />
                        </form>
                        <p className='text-base mt-2'>Already have an account? <span className='text-blue-600'><Link to="/login">Login</Link></span></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default SignUp;