import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { IUser } from '../interfaces/IUser';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREB_API_KEY,
    authDomain: import.meta.env.VITE_FIREB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREB_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREB_APP_ID,
    measurementId: import.meta.env.VITE_FIREB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const login = ({ email, password }: IUser) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
    return signOut(auth);
};
