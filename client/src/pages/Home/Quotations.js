import React from 'react';
import bg2 from '../../images/bg2.jpg';
const Quotations = () => {
    return (
        <section className='py-10 bg-fixed' style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover'}}>
            <div className="w-11/12 mx-auto py-20">
                <div className="grid items-center lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <h2 className='text-5xl text-secondary font-medium mb-5'>Easy Sourcing</h2>
                        <p className='text-lg text-white'>An easy way to post your sourcing requests and get quotes. One request, multiple quotes, Verified suppliers, matching Quotes, comparison and sample request</p>
                    </div>
                    <div>
                        <div className="card w-full glass">
                            <div className="card-body">
                                <h2 className='text-3xl mb-5'>Want to get quotations?</h2>
                                <form>
                                    <input type="text" placeholder="Product Name" className="input w-full mb-5" required/>
                                    <textarea className="textarea w-full mb-5" placeholder="Product Description"></textarea>
                                    <input type="text" placeholder="Purchase Quantity" className="input w-full mb-5" required/>
                                    <input className='btn btn-secondary text-white' type="submit" value="Post Your Request Now" required/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quotations;