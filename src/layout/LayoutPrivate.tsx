import { Navigate, Outlet } from 'react-router-dom';
import { UserContextType } from '../context/UserContext';
import { useUserContext } from '../hooks/useUserContext';

const LayoutPrivate = () => {
    const { userWithPrivileges } = useUserContext() as UserContextType;

    return userWithPrivileges ? <Outlet /> : <Navigate to="/" />;
};

export default LayoutPrivate;
