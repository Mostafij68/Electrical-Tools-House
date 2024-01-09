import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteModal from './DeleteModal';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const [deleteId, setDeleteId] = useState('');

    useEffect(() => {
        const email = user?.email;
        const url = `${process.env.REACT_APP_API}/order?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [myOrders]);

    return (
        <section className='px-5'>
            <h2 className='mb-4 text-center text-xl font-semibold text-accent'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th>Name</th>
                            <th>Total Quantity</th>
                            <th>Total price</th>
                            <th>Payment Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) =>
                                <tr key={myOrder._id} className="hover border-b">
                                    <th className='border-r'>{index + 1}</th>
                                    <td>{myOrder.productName}</td>
                                    <td>{myOrder.orderQuantity}</td>
                                    <td>${myOrder.totalPrice}</td>
                                    <td>
                                        {
                                        myOrder.paid ?
                                            <>
                                            <p className='text-green-500'>Paid</p>
                                            <small className='text-green-500'>Your transaction id: <span className='text-orange-500'>{myOrder.transactionId}</span></small>
                                            </> 
                                            :
                                            <>
                                                <Link to={`/dashboard/payment/${myOrder._id}`}>
                                                    <button className='btn btn-secondary btn-sm px-4 mr-2'>Pay<i className="fas fa-hand-holding-usd ml-1"></i></button>
                                                </Link>
                                                <a onClick={()=>setDeleteId(myOrder._id)} href="#delete" className='btn btn-accent btn-sm '>Cancel</a>
                                                <DeleteModal>{deleteId}</DeleteModal>
                                            </>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </section>
    );
};

export default MyOrders;