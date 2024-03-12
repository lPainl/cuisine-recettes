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
            className={`max-w-96 ${inputProps.className ?? inputProps.className} w-full  rounded-lg border border-gray-400 p-2`}
        />
    );
};

export default CustomInput;
