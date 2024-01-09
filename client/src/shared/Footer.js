import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-neutral'>
            <div className='w-11/12 mx-auto text-center'>
                <p className='p-5 m-0 mt-5 text-white'><small className='text-light'>&copy; Copyright {new Date().getFullYear()} </small> Electrical Tools House</p>
            </div>
        </footer>
    );
};

export default Footer;