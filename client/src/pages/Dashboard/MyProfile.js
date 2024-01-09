import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useGetUser from '../../hooks/useGetUser';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { displayName, email } = user;
    const [getUser, setGetUser] = useGetUser(user);


    const handleSaveUserInfo = event => {
        event.preventDefault();
        const email = user.email;
        const displayName = user.displayName;
        const education = event.target.education.value;
        const address = event.target.address.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkedIn = event.target.linkedIn.value;
        const admin = 'false'
        const userInfo = { displayName, email, education, address, location, phone, linkedIn, admin }
        fetch(`${process.env.REACT_APP_API}/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {});
        toast.success('Information Add Successfully. Please Refresh The Page');
    };

    const hanleUpdate = () => {
        setGetUser('');
    };

    return (
        <section>
            <h2 className='mb-4 text-center text-xl font-semibold text-accent uppercase'>User Information</h2>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSaveUserInfo}>
                        {
                            getUser ?
                                getUser.map(u => <ul key={u._id} className='text-neutral'>
                                    <li>
                                        <h2 className="text-secondary text-3xl">{u.displayName}</h2>
                                    </li>
                                    <li className='mt-2 text-lg'><i className="fa-regular fa-envelope"></i> Email: {u.email}</li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="education"><i className="fa-solid fa-book"></i> Education :</label>
                                        <span className='font-medium ml-2'>{u.education}</span>
                                    </li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="address"><i className="fa-regular fa-address-book"></i> Your Address :</label>
                                        <span className='font-medium ml-2'>{u.address}</span>
                                    </li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="location"><i className="fa-solid fa-map-location-dot"></i> Your Location :</label>
                                        <span className='font-medium ml-2'>{u.location}</span>
                                    </li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="phone"><i className="fa-solid fa-phone"></i> Phone Number :</label>
                                        <span className='font-medium ml-2'>{u.phone}</span>
                                    </li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="linkedIn">LinkedIn Profile Link :</label>
                                        <a href={u.linkedIn} className='font-medium ml-2 text-blue-600'><i className="fa-brands fa-linkedin"></i> Link</a>
                                    </li>
                                    <li className='mt-5 text-lg'>
                                        <button onClick={() => hanleUpdate()} className='btn btn-secondary btn-outline sm:w-1/2 w-full'>Update</button>
                                    </li>
                                </ul>)
                                :
                                <ul>
                                    <li>
                                        <h2 className="text-secondary text-3xl">{displayName}</h2>
                                    </li>
                                    <li className='mt-2 text-lg'>Email: {email}</li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="education">Education :</label>
                                        <input name='eduction' id='education' type="text" placeholder="Add your education" className="input input-bordered sm:w-96 w-full ml-2" />
                                    </li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="address">Your Address :</label>
                                        <input name='address' id='address' type="text" placeholder="Add your address" className="input input-bordered sm:w-96 w-full ml-2" />
                                    </li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="location">Your Location :</label>
                                        <input name='location' id='location' type="text" placeholder="city/district" className="input input-bordered sm:w-96 w-full ml-2" />
                                    </li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="phone">Phone Number :</label>
                                        <input name='phone' id='phone' type="phone" placeholder="Your Phone Number" className="input input-bordered sm:w-96 w-full ml-2" />
                                    </li>
                                    <li className='mt-2 text-lg'>
                                        <label htmlFor="linkedIn">LinkedIn Profile Link :</label>
                                        <input name='linkedIn' id='linkedIn' type="text" placeholder="Add your LinkedIn profile link" className="input input-bordered sm:w-96 w-full ml-2" />
                                    </li>
                                    <li className='mt-5 text-lg'>
                                        <button type='submit' className='btn btn-secondary sm:w-1/2 w-full'>Save</button>
                                    </li>
                                </ul>
                        }
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;