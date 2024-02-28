import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
    menuOpen: boolean;
    onOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const CustomHeader = ({ menuOpen, onOpenMenu }: HeaderProps) => {
    return (
        <section className="flex flex-col">
            <header className="flex justify-end">
                <button onClick={() => onOpenMenu(true)}>
                    <Bars3BottomRightIcon className="size-6" />
                </button>
            </header>
            <div
                className={`absolute left-0 top-0  flex h-full  w-full transition duration-700 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-[150%]'}`}
            >
                <div className="h-full w-5/6  bg-gray-500 bg-opacity-70">
                    <main className="size-full rounded-r-md border-r border-gray-700 bg-white"></main>
                </div>
                <aside
                    className={`h-full w-1/6 bg-gray-500 opacity-70`}
                    onClick={() => onOpenMenu(false)}
                ></aside>
            </div>
        </section>
    );
};

export default CustomHeader;
