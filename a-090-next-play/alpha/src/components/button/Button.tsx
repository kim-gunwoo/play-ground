import React from "react";
import styles from './Button.module.sass'

interface IButtonProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, onClick }: IButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}