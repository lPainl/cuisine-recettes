import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

type HeaderProps = {
    menuOpen: boolean;
    onOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const CustomHeader = ({
    menuOpen,
    onOpenMenu,
    children,
}: PropsWithChildren<HeaderProps>) => {
    return (
        <section className="flex flex-col">
            <header className="flex h-4 justify-end lg:h-7 lg:justify-normal">
                <button
                    className="flex lg:hidden"
                    onClick={() => onOpenMenu(true)}
                >
                    <Bars3BottomRightIcon className="size-6" />
                </button>
                <div className="hidden w-full lg:flex">
                    <slot>{children}</slot>
                </div>
            </header>
            <div
                className={`absolute left-0 top-0 z-50 flex h-full w-full bg-gray-500 bg-opacity-70 transition-all duration-500 ease-in-out ${menuOpen ? 'visible' : 'invisible'}`}
            >
                <div
                    className={`h-full w-5/6 transition duration-700 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-[150%]'}`}
                >
                    <slot>{children}</slot>
                </div>
                <button
                    className="h-full w-1/6"
                    onClick={() => onOpenMenu(false)}
                ></button>
            </div>
        </section>
    );
};

export default CustomHeader;
