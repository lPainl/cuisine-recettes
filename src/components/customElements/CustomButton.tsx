import { ClassAttributes, InputHTMLAttributes } from 'react';

type CustomButtonType = {
    importancy?: 'primary' | 'secondary' | 'terciary';
};

const CustomButton = ({
    children,
    className,
    onClick,
    importancy,
}: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    InputHTMLAttributes<HTMLButtonElement> &
    CustomButtonType) => {
    const getImportancyColor = ({ importancy }: CustomButtonType) => {
        if (!importancy) return 'bg-violet-400';
        if (importancy === 'primary') return 'bg-violet-400';
        if (importancy === 'secondary') return 'bg-purple-200';
        return 'bg-white border-none underline text-gray-600';
    };

    return (
        <button
            className={`${className ?? className}
            w-fit rounded-full border border-gray-900 px-3 py-2
            ${getImportancyColor({ importancy })}`}
            type="submit"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
