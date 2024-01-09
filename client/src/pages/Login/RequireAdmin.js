import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useGetUser from '../../hooks/useGetUser';
import Spinner from '../../shared/Spinner';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [getUser, setGetUser] = useGetUser(user);
    const location = useLocation();

    if (loading) {
        return <div className='h-screen w-full flex items-center justify-center'>
            <Spinner></Spinner>
        </div>
    };

    if(getUser[0]?.admin === 'false'){
        return <Navigate to="/dashboard" state={{ from: location }} replace />
    }

    return children;
};

export default RequireAdmin;