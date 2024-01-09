import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProductInfo from '../../hooks/useProductInfo';
import Footer from '../../shared/Footer';


const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [product] = useProductInfo(id);
    const { _id, name, price, img, description, total, minOrder, supplier } = product;
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();


    const handleQuantitnyChange = event => {
        setQuantity(event.target.value)
    };

    const hanleOrder = event => {
        event.preventDefault();
        const userName = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const orderQuantity = event.target.quantity.value;
        const productName = name;
        const totalPrice = price * orderQuantity;
        const order = {userName, email, address, phone, orderQuantity, productName, totalPrice};

        fetch(`${process.env.REACT_APP_API}/order`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Your Order add successfully.");
            event.target.reset();
            navigate('/dashboard/myOrders')
        })
    };

    return (
        <>
            <section className='w-11/12 mx-auto py-16'>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={img} className='w-auto lg:h-96 h-80' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-medium">{name}</h2>
                            <h5 className='text-xl font-medium mt-5'>Available products <i className="fa-solid fa-arrow-right"></i> {total} <span className='text-md font-normal text-gray-400'>/piece</span></h5>
                            <h5 className='text-xl font-medium'>Min order : {minOrder} <span className='text-md font-normal text-gray-400'>/piece</span></h5>
                            <p className='text-xl font-medium mb-5'>Price : ${price}<span className='text-md font-normal text-gray-400'>/per piece</span></p>
                            <ul>
                                {
                                    description?.map((d, index) =>
                                        <li key={index} className='text-lg text-gray-600'><i className="fa-solid fa-angles-right text-secondary"></i> {d}</li>)
                                }
                            </ul>
                            <h5 className='text-xl font-medium mt-5'>Supplier <i className="fa-solid fa-arrow-right-long"></i> <span className='text-accent'>{supplier}</span></h5>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full glass">
                            <div className="card-body">
                                <h2 className="text-3xl text-center text-secondary">Complete Your Purchase</h2>
                                <form onSubmit={hanleOrder}>
                                    <div>
                                        <label htmlFor="name">Your Name</label>
                                        <input name='name' id='name' disabled value={user?.displayName} type="text"  className="input input-bordered w-full mb-3" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Your Email</label>
                                        <input name='email' id='email' disabled value={user?.email} type="email"  className="input input-bordered w-full mb-3" />
                                    </div>
                                    <div>
                                        <label htmlFor="address">Address *</label>
                                        <input name='address' id='address' placeholder='Your address' type="text"  className="input input-bordered w-full mb-3" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input name='phone' id='phone' placeholder='Your Phone Number' type="phone"  className="input input-bordered w-full mb-3" />
                                    </div>
                                    <div>
                                        <label htmlFor="quantity">Order Quantity *</label>
                                        <input name='quantity' onChange={handleQuantitnyChange} id='quantity' placeholder={`Minimum Order ${minOrder} Piece`} type="number"  className="input input-bordered w-full mb-3" required/>
                                        {
                                            parseInt(quantity) > parseInt(total) && parseInt(quantity) !== 0 && <p className='text-base text-red-500'>You can't exceed the available amount</p>
                                        }
                                        {
                                            parseInt(quantity) < parseInt(minOrder) && parseInt(quantity) !== 0 && <p className='text-base text-red-500'>You can't reduce the minimum amount</p>
                                        }
                                    </div>
                                    <input 
                                    className="btn btn-primary mt-5 w-full" 
                                    type="submit" 
                                    value="Place the order"
                                    disabled={parseInt(quantity) > parseInt(total) || parseInt(quantity) < parseInt(minOrder) || parseInt(quantity) === ''} />
                                </form>
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Purchase;