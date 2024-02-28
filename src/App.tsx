import { useEffect, useState } from 'react';
import CustomHeader from './components/CustomHeader';
import NewRecipe from './components/NewRecipe';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        menuOpen
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden');
    }, [menuOpen]);

    return (
        <div className="m-5 flex flex-col gap-8">
            <CustomHeader menuOpen={menuOpen} onOpenMenu={setMenuOpen} />
            <main>
                <NewRecipe></NewRecipe>
            </main>
        </div>
    );
};

export default App;
