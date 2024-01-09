import React from 'react';
import bg1 from '../../images/bg-1.jpg'

const About = () => {
    return (
        <section className='py-10 bg-fixed' style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover' }}>
            <div className="w-11/12 mx-auto">
                <div className='text-center'>
                    <h1 className='text-5xl text-white text-center mt-10'>Millions Buyer Trust us</h1>
                    <p className='text-secondary text-2xl my-5'>Succes Business</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 pt-10'>
                    <div className='text-center'>
                        <span className='text-secondary text-8xl'><i className="fas fa-boxes"></i></span>
                        <h1 className='text-5xl mt-5 text-gray-100'>1800+</h1>
                        <p className='text-lg text-secondary font-medium'>Categories</p>
                    </div>
                    <div className='text-center'>
                        <span className='text-secondary text-8xl'><i className="fa-solid fa-earth-americas"></i></span>
                        <h1 className='text-5xl mt-5 text-gray-100'>50</h1>
                        <p className='text-lg text-secondary font-medium'>Countries</p>
                    </div>
                    <div className='text-center'>
                        <span className='text-secondary text-8xl'><i className="fa-solid fa-people-carry-box"></i></span>
                        <h1 className='text-5xl mt-5 text-gray-100'>5000+</h1>
                        <p className='text-lg text-secondary font-medium'>Registered Supplier Members</p>
                    </div>
                    <div className='text-center'>
                        <span className='text-secondary text-8xl'><i className="fa-solid fa-people-group"></i></span>
                        <h1 className='text-5xl mt-5 text-gray-100'>8000+</h1>
                        <p className='text-lg text-secondary font-medium'>Registered Buyer Members</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;