import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useGetUser from '../../hooks/useGetUser';
import Footer from '../../shared/Footer';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [getUser, setGetUser] = useGetUser(user);
    const sideMenu = <>
        <li><Link to='/dashboard'><i className="fa-regular fa-user"></i>My Profile</Link></li>
        {
            getUser[0]?.admin === 'true' ?
                <>
                    <li><Link to='/dashboard/manageOrders'><i className="fa-solid fa-list-check"></i>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/addProduct'><i className="fa-solid fa-cart-plus"></i>Add A Product</Link></li>
                    <li><Link to='/dashboard/makeAdmin'><i className="fa-solid fa-arrows-down-to-people text-lg"></i>Make Admin</Link></li>
                </>
                :
                <>
                    <li><Link to='/dashboard/addReview'><i className="far fa-comment"></i>Add a Review</Link></li>
                    <li><Link to='/dashboard/myOrders'><i className="fa-regular fa-bookmark"></i>My Orders</Link></li>
                </>
        }
    </>;
    return (
        <>
            <section className='lg:w-full lg:mx-0 w-11/12 mx-auto'>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* <!-- Page content here --> */}
                        <label title='Open drawer' htmlFor="my-drawer-2" className='cursor-pointer absolute z-30 text-5xl left-2 h-screen flex items-center lg:hidden'>
                            <i className="fa-solid fa-chevron-right"></i>
                        </label>
                        <h1 className='text-3xl font-medium text-center my-3 text-secondary'>Dashboard</h1>
                        <Outlet />

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 bg-gray-200 overflow-y-auto w-80 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            {sideMenu}
                            <label title='Close drawer' htmlFor="my-drawer-2" className='cursor-pointer absolute text-5xl right-0 h-screen flex items-center lg:hidden'>
                                <i className="fa-solid fa-chevron-left"></i>
                            </label>
                        </ul>

                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;