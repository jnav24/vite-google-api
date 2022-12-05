import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
    children: ReactNode;
    disabled?: boolean;
    submit?: boolean;
};

export default function Button({ children, disabled, submit }: Props) {
    return (
        <button
            className={clsx(
                'outline-none shadow-outline py-2 px-8 rounded-lg',
                'transition-all ease-in duration-150',
                !disabled && [
                    'bg-primary shadow-gray-400 dark:text-gray-900',
                    'hover:bg-primaryMed focus:bg-primaryMed hover:shadow-md focus:shadow-md focus:text-white hover:text-white',
                    'hover:dark:bg-primaryDark focus:dark:bg-primaryDark hover:dark:shadow-lg focus:dark:shadow-lg',
                ],
                disabled && ['bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-800'],
            )}
            disabled={disabled}
            type={submit ? 'submit' : 'button'}
        >
            {children}
        </button>
    );
}
