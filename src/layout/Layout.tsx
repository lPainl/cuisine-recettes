import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../components/header/CustomHeader';
import HeaderContent from '../components/header/HeaderContent';

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        menuOpen
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden');
    }, [menuOpen]);

    return (
        <div className="m-5 flex flex-col gap-8">
            <CustomHeader menuOpen={menuOpen} onOpenMenu={setMenuOpen}>
                <HeaderContent onOpenMenu={setMenuOpen} />
            </CustomHeader>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
