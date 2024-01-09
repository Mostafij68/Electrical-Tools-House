import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API}/order`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [myOrders]);

    return (
        <section className='px-5'>
            <h2 className='mb-4 text-center text-xl font-semibold text-accent'>Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Product</th>
                            <th>Total Quantity</th>
                            <th>Total price</th>
                            <th>Deliver Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) =>
                                <tr key={myOrder._id} className="hover border-b">
                                    <td>{myOrder.userName}</td>
                                    <td>{myOrder.email}</td>
                                    <td>{myOrder.productName}</td>
                                    <td>{myOrder.orderQuantity}</td>
                                    <td>${myOrder.totalPrice} {
                                        myOrder.paid === true ? <span className='text-sm text-success'>Paid</span> : <span className='text-sm text-warning'>Unpaid</span>
                                    }</td>
                                    <td>Proccessing</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </section>
    );
};

export default ManageOrders;