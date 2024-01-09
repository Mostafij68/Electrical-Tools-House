import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, price, img, description, total, minOrder, supplier } = product;

    const handlePurchase = _id => {
        navigate(`/purchase/${_id}`);
    };

    return (
        <div className="card w-full bg-base-100 shadow-[0_1px_8px_0_rgb(0,0,0,0.1)]">
            <figure><img src={img} className='w-auto lg:h-80 h-72 mt-10' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-medium">{name}</h2>
                <ul className='flex flex-col gap-2'>
                    {
                        description.map((d, index) => 
                        <li key={index} className='text-base text-gray-600'><i className="fa-solid fa-angles-right text-secondary mr-2"></i>{d}</li>)
                    }
                </ul>
                <h5 className='text-lg font-medium mt-5'>Supplier <i className="fa-solid fa-arrow-right-long"></i> <span className='text-accent'>{supplier}</span></h5>
                <h5 className='text-lg font-medium'>Available products <i className="fa-solid fa-arrow-right"></i> {total} <span className='text-md font-normal text-gray-400'>/piece</span></h5>
                <h5 className='text-lg font-medium'>Min order : {minOrder} <span className='text-md font-normal text-gray-400'>/piece</span></h5>
                <p className='text-lg font-medium'>Price : ${price}<span className='text-md font-normal text-gray-400'>/per piece</span></p>
                <div className="card-actions justify-center">
                    <button onClick={() => handlePurchase(_id)} className="btn btn-secondary text-white">
                    <i className="fa-solid fa-cart-shopping mr-2"></i>
                    Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;