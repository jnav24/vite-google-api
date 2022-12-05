import clsx from 'clsx';
import SearchIcon from './icons/SearchIcon';

export default function NoResults() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div
                className={clsx(
                    'bg-white shadow-lg shadow-gray-300 p-4 rounded-full w-24',
                    'dark:bg-gray-700 dark:shadow-gray-900 flex flex-row align-middle space-x-4',
                )}
            >
                <SearchIcon className='text-primaryMed dark:text-primary h-16 w-16' />
            </div>

            <div className='text-center pt-8'>
                <h2 className='text-2xl text-primaryMed dark:text-primary'>No Results</h2>
                <p className='text-gray-500 pt-4'>Please change the details and try again.</p>
            </div>
        </div>
    );
}
