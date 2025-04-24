import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    icon
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 ease-in-out rounded-md focus:outline-none';

    const variantStyles = {
        primary: 'bg-[#018D43] text-white hover:bg-white border border-[#018D43] hover:text-[#018D43] shadow-sm',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100'
    };

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-2.5 text-lg'
    };

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

    return (
        <button
            type={type}
            className={buttonStyles}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;