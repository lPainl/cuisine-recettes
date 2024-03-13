import {
    ArrowRightCircleIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/customElements/CustomButton';
import CustomInput from '../components/customElements/CustomInput';
import CustomModal, {
    CustomModalRef,
} from '../components/customElements/CustomModal';
import { login } from '../config/firebase';
import { UserContextType } from '../context/UserContext';
import { useActiveUser } from '../hooks/useActiveUser';
import { useUserContext } from '../hooks/useUserContext';
import { IUser } from '../interfaces/IUser';

const Home = () => {
    const [user, setUser] = useState<IUser>({
        email: '',
        password: '',
    });
    const { userWithPrivileges, setUserWithPrivileges } =
        useUserContext() as UserContextType;

    useActiveUser(userWithPrivileges);

    const navigate = useNavigate();
    const modalRef = useRef<CustomModalRef>(null);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const nameEvent = target.name;
        const valueEvent = target.value;

        const newRecipe = {
            ...user,
            [nameEvent]: valueEvent,
        };

        setUser(newRecipe);
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await login(user);
            setUserWithPrivileges(true);
            navigate('/private');
        } catch {
            if (modalRef.current) {
                modalRef.current.openModal();
            }
        }
    };

    return (
        <section>
            <h2>Inicio</h2>
            <form className=" flex flex-col" onSubmit={handleLogin}>
                <div className="my-8 grid grid-cols-[min-content_auto] items-center gap-x-4 gap-y-4">
                    <label htmlFor="email">Correo</label>
                    <CustomInput
                        placeholder="correo@dominio.com"
                        name="email"
                        type="text"
                        id="email"
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Contraseña</label>
                    <CustomInput
                        placeholder="Constraseña"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>

                <CustomButton disabled={!(user.email && user.password)}>
                    <div className="flex gap-2">
                        Login
                        <ArrowRightCircleIcon className="size-6" />
                    </div>
                </CustomButton>
            </form>

            <CustomButton
                type="button"
                importancy="terciary"
                className="mx-auto mt-8 flex"
                onClick={() => navigate('/recipes')}
            >
                <div className="flex items-center gap-2">
                    Continuar como invitado
                    <ChevronRightIcon className="size-4 text-gray-600" />
                </div>
            </CustomButton>

            <CustomModal
                ref={modalRef}
                title={'Usuario Incorrecto'}
                text={'El correo o la contraseña no concuerda'}
            />
        </section>
    );
};

export default Home;
