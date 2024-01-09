import React from 'react';
import Footer from '../shared/Footer';
import error404 from '../images/404.jpg';
const NotFound = () => {
    return (
        <>
            <section>
                <img className='w-full h-screen bg-cover' src={error404} alt="" />
            </section>
            <Footer></Footer>
        </>
    );
};

export default NotFound;