import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useActiveUser = (userWithPrivileges: boolean) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (userWithPrivileges) {
            navigate('/private');
        }
    }, [userWithPrivileges]);
};
