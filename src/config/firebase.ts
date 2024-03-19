import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
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

const auth = getAuth(app);

const login = ({ email, password }: IUser) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
    return signOut(auth);
};

const recipesDB = getFirestore(app);

export { auth, login, logout, recipesDB };
