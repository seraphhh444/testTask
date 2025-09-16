import React from 'react';
import classNames from "classnames";
import cls from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    clear?: boolean;
    className?: string;
    onClick?: () => void;
}

const Button = ({clear, className, onClick, children}: ButtonProps) => {

    const mods: Record<string, boolean | undefined> = {
        [cls.button_clear]: clear
    }

    return (
        <button
            className={classNames(cls.button, mods, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;