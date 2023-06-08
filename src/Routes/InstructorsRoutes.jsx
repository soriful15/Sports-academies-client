
/* eslint-disable no-undef */
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Page/hooks/useAuth';
import instructorsUsers from '../Page/hooks/instructorsUsers';
const InstructorsRoutes = ({children}) => {
    const { user, loading } = useAuth()
    const [isInstructors, isInstructorsLoading] = instructorsUsers();
    let location = useLocation()
    if (loading || isInstructorsLoading) {
        return <><div className='mt-10 text-center'><progress className="progress w-56 mt-10 text-center"></progress></div></>
    }
    if (user && isInstructors) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default InstructorsRoutes;