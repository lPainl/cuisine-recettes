import { InputHTMLAttributes } from 'react';

type CustomButtonType = {
    importancy?: 'primary' | 'secondary' | 'terciary';
};

const CustomButton = ({
    children,
    className,
    onClick,
    importancy,
    disabled,
}: JSX.IntrinsicAttributes &
    InputHTMLAttributes<HTMLButtonElement> &
    CustomButtonType) => {
    const getImportancyColor = (importancy = 'primary', disabled = false) => {
        if (disabled) return getDisabledColor(importancy);
        if (!importancy) return 'bg-violet-400';
        if (importancy === 'primary') return 'border-gray-900 bg-violet-400';
        if (importancy === 'secondary') return 'border-gray-900 bg-purple-200';
        return 'bg-white border-none underline text-gray-600';
    };

    const getDisabledColor = (importancy = 'primary') => {
        if (importancy === 'primary')
            return 'border-gray-400 bg-violet-200 text-gray-400';
        if (importancy === 'secondary') return 'bg-purple-200';
        return 'bg-white border-none underline text-gray-600';
    };

    return (
        <button
            className={`${className || ''}
            w-fit rounded-full border px-3 py-2
            ${getImportancyColor(importancy, disabled)}`}
            type="submit"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default CustomButton;
