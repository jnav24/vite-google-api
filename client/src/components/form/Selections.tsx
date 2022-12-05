import clsx from 'clsx';
import CheckIcon from '../icons/CheckIcon';
import { KeyboardEvent } from 'react';

type Props = {
    label: string;
    items: Array<{ value: string; label: string }>;
    selectedValue: string;
    handleSelectedValue: (value: string) => void;
};

export default function Selections({ label, items, selectedValue, handleSelectedValue }: Props) {
    const handleSelection = (value: string) => {
        handleSelectedValue(selectedValue === value ? '' : value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, value: string) => {
        if ([13, 32].includes(e.keyCode)) {
            handleSelection(value);
        }
    };

    return (
        <>
            <p className='text-gray-600 dark:text-gray-400'>{label}</p>
            <div className='mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4' role='radiogroup'>
                {items.map((item, index) => (
                    <div
                        className={clsx(
                            selectedValue === item.value
                                ? 'border-primaryMed bg-primaryMed bg-opacity-10 dark:border-primary dark:bg-primary dark:bg-opacity-10'
                                : 'border-gray-400 dark:border-gray-900 hover:bg-gray-800 focus:bg-gray-800',
                            'transition-all duration-150 border relative rounded-md py-4 px-2 cursor-pointer outline-none',
                        )}
                        key={index}
                        onClick={() => handleSelection(item.value)}
                        onKeyDown={(e) => handleKeyDown(e, item.value)}
                        role='radio'
                        tabIndex={index + 2}
                        aria-labelledby=''
                    >
                        {selectedValue === item.value && (
                            <div className='rounded-full bg-primary absolute h-6 w-6 -top-3 -right-3 flex flex-row justify-center items-center'>
                                <CheckIcon className='text-white h-4 w-4' />
                            </div>
                        )}
                        <label className='text-sm' htmlFor=''>
                            {item.label}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
}
