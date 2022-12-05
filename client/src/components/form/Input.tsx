import { FormEvent, useMemo } from 'react';

type Props = {
    handleChange: (value: string) => void;
    label: string;
    value: string;
};

export default function Input({ handleChange, label, value }: Props) {
    const labelId = useMemo(() => label.toLowerCase().replace(/\s+/g, '-'), [label]);

    const handleOnInput = (e: FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        handleChange(value);
    };

    return (
        <div className='flex flex-col'>
            <label className='text-gray-600 dark:text-gray-400' htmlFor={labelId}>
                {label}
            </label>
            <input
                aria-label={label}
                id={labelId}
                className='bg-white dark:bg-gray-800 outline-none border border-gray-300 dark:border-gray-800 rounded-lg py-2 focus:border-primary px-2 mt-2'
                type='text'
                value={value}
                onInput={handleOnInput}
                tabIndex={1}
            />
        </div>
    );
}
