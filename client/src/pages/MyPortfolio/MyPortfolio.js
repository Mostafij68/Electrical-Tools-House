import React from 'react';
import Footer from '../../shared/Footer';

const MyPortfolio = () => {
    return (
        <>
            <section className='w-11/12 mx-auto mb-28'>
                <h1 className='text-3xl font-medium text-center text-secondary my-8'>My Porfolio</h1>
                <div className="card shadow-[0_1px_10px_rgb(0,0,0,0.1)] sm:w-2/3 mx-auto w-full glass">
                    <div className="card-body">
                        <div className='text-center mb-6'>
                            <h2 className="text-2xl font-medium text-accent">Mostafij Mozumdar</h2>
                            <p className='text-gray-400 font-medium'>mostafijmf@gmail.com</p>
                        </div>
                        <div className='flex'>
                            <div className='text-lg font-semibold mr-3'>Education :</div>
                            <div className='font-medium text-lg'>Higher Secondary Certificate (HSC)/ Alim - 2021 <br />
                                <span className='text-base'>Al Jamiatul Falahia Kamil Madrasah, Feni, CTG</span>
                            </div>
                        </div>
                        <div>
                            <h2 className='mt-8 mb-4 text-xl'>Technology skills : <span className='text-base ml-3'>HTML5, CSS3, JavaScript(ES6), React, Node.js, Express.js, MongoDB (MERN-Stack)</span></h2>
                        </div>
                        <div>
                            <h2 className='mt-8 mb-3 text-xl'>Some Project Link :</h2>
                            <ul>
                                <li className='text-blue-500'>
                                    <a href="https://vertext-books-house.web.app/">Vertex Books House</a>
                                </li>
                                <li className='text-blue-500'>
                                    <a href="https://genius-wedding-photography.web.app/">Genius Wedding Photography</a>
                                </li>
                                <li className='text-blue-500'>
                                    <a href="https://elegant-watch-world.netlify.app/">Elegant Watch World</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default MyPortfolio;