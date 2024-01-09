import React from 'react';
import useProducts from '../../hooks/useProducts';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const [loading, products] = useProducts([]);
    return (
        <section className='my-14 w-10/12 mx-auto'>
            <h1 className='text-5xl text-secondary mb-14 text-center'>Tools</h1>
            {
                loading ?
                    <div className='text-2xl pb-20 text-center animate-pulse'>
                        Loading ...
                    </div>
                    :
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14'>
                        {
                            products.slice(0, 4).map(product => <ToolsCard key={product._id} product={product}></ToolsCard>)
                        }
                    </div>
            }
        </section>
    );
};

export default Tools;