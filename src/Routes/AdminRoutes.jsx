/* eslint-disable no-undef */
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Page/hooks/useAuth';
import adminUsers from '../Page/hooks/adminUsers';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = adminUsers();
    let location = useLocation()
    if (loading || isAdminLoading) {
        return <><div className='mt-10 text-center'><progress className="progress w-56 mt-10 text-center"></progress></div></>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default AdminRoutes;