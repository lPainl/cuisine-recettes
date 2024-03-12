import { onAuthStateChanged } from 'firebase/auth';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';

export type UserContextType = {
    userWithPrivileges: boolean;
    setUserWithPrivileges: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [userWithPrivileges, setUserWithPrivileges] = useState<
        boolean | null
    >(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserWithPrivileges(true);
                return;
            }
            setUserWithPrivileges(false);
        });

        return unsubscribe;
    }, []);

    if (userWithPrivileges === null) return <p>Loading...</p>;

    return (
        <UserContext.Provider
            value={{ userWithPrivileges, setUserWithPrivileges }}
        >
            {children}
        </UserContext.Provider>
    );
};
