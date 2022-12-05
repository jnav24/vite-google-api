import clsx from 'clsx';
import SearchIcon from './icons/SearchIcon';

export default function SearchPlaceholder() {
    return (
        <div
            className={clsx(
                'bg-white shadow-lg shadow-gray-300 py-2 px-4 rounded-lg w-64',
                'dark:bg-gray-700 dark:shadow-gray-900 flex flex-row align-middle space-x-4',
            )}
        >
            <SearchIcon className='text-primaryMed dark:text-primary h-4 w-4' />
            <div className='bg-gray-300 dark:bg-gray-800 w-48 h-4' />
        </div>
    );
}
