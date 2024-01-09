import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3wQgCz86hayjrRADBLCwHdGfMgRYRcpFU1kjfq92GOGRrDqOv3RhG2wgYL4O46CmR5bxP59m6r3htpby5jct4w00Z5veDRpn');

const Payment = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = `${process.env.REACT_APP_API}/order/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div className='flex justify-center mt-28'>
            <div className="card sm:w-96 w-full glass">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;