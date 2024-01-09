import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    };

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password)
    };
    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check Your Email')
        }
        else{
            toast.error('Please provide a valid email')
        };
    };
    return (
        <section className='flex justify-center bg-slate-200 items-center h-screen'>
            <div className="w-11/12 mx-auto flex justify-center">
                <div className="card lg:w-96 md:w-96 sm:w-96 w-full shadow-xl glass">
                    <div className="card-body pb-0 text-center">
                        <h2 className="text-3xl text-secondary text-center mb-2">Login</h2>
                        <form onSubmit={handleLogin}>
                            <input ref={emailRef} type="email" placeholder="Email Address" className="input input-bordered w-full mb-5" />
                            <input ref={passRef} type="password" placeholder="Password" className="input input-bordered w-full mb-5" />
                            {
                                error ? <p className='text-base text-red-500 pb-2'>{error.message}</p> : ''
                            }
                            {
                                loading && <p className='pb-2'><Spinner></Spinner></p>
                            }
                            <input className='btn btn-secondary text-white' type="submit" value="Log in" />
                        </form>
                        <p className='text-base mt-2'>Haven't account? <span className='text-blue-600'><Link to="/signUp">Sign-up</Link></span></p>
                        {
                            sending ?
                                <Spinner></Spinner> :
                                <p className='text-base'>Forget Password?
                                    <button onClick={() => handleReset()} className="text-blue-600 normal-case">Reset</button>
                                </p>
                        }
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default Login;