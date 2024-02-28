import { ClassAttributes, InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';

const CustomInput = (
    inputProps: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLInputElement> &
        InputHTMLAttributes<HTMLInputElement>
) => {
    return (
        <input
            type="text"
            {...inputProps}
            className={`${inputProps.className ?? inputProps.className} rounded-lg border border-gray-400 p-2`}
        />
    );
};

export default CustomInput;
