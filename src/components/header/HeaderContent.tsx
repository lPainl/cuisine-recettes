import {
    ArrowLeftStartOnRectangleIcon,
    BookOpenIcon,
    HomeIcon,
    PlusIcon,
} from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../config/firebase';
import { UserContext, UserContextType } from '../../context/UserContext';

type HeaderContentProps = {
    onOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const HeaderContent = ({ onOpenMenu }: HeaderContentProps) => {
    const { userWithPrivileges } = useContext(UserContext) as UserContextType;

    const closeMenu = () => {
        onOpenMenu(false);
    };

    const handleLogout = async () => {
        closeMenu();
        try {
            await logout();
        } catch (error) {
            console.error('Error');
        }
    };

    const getNavLinkClassName = ({ isActive }: { isActive: boolean }) => {
        let linkClass = 'flex items-center gap-2';
        linkClass = isActive ? linkClass + ' bg-green-400' : linkClass;
        return linkClass;
    };

    return (
        <section className="flex size-full flex-col rounded-r-md border-r border-gray-700 bg-white p-4 lg:flex-row lg:justify-between lg:rounded-none lg:border-none lg:p-0">
            <header>
                <h2>Menu</h2>
            </header>
            <nav className="mt-8 flex h-full flex-col lg:mt-0 lg:flex-row lg:gap-10">
                <div className="flex h-full flex-col gap-4 lg:flex-row lg:justify-end">
                    <NavLink
                        to="/"
                        className={getNavLinkClassName}
                        onClick={closeMenu}
                    >
                        <h4>Home</h4>
                        <HomeIcon className="size-6 text-gray-600" />
                    </NavLink>
                    <NavLink
                        to="/recipes"
                        className={getNavLinkClassName}
                        onClick={closeMenu}
                    >
                        <h4>Ver Recetas</h4>
                        <BookOpenIcon className="size-6 text-sky-500" />
                    </NavLink>
                    {userWithPrivileges && (
                        <NavLink
                            to="/createRecipe"
                            className={getNavLinkClassName}
                            onClick={closeMenu}
                        >
                            <h4>Crear Receta</h4>
                            <PlusIcon className="size-6 text-green-500" />
                        </NavLink>
                    )}
                </div>

                {userWithPrivileges && (
                    <button
                        className="flex items-center gap-2"
                        onClick={handleLogout}
                    >
                        <h4>Cerrar sesión</h4>
                        <ArrowLeftStartOnRectangleIcon className="size-6 text-gray-500" />
                    </button>
                )}
            </nav>
        </section>
    );
};

export default HeaderContent;
