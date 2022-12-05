import clsx from 'clsx';
import SearchPlaceholder from './SearchPlaceholder';

export default function InitialResults() {
    return (
        <div className='flex flex-row justify-center'>
            <div className='space-y-4'>
                <SearchPlaceholder />
                <div className='pl-24'>
                    <SearchPlaceholder />
                </div>
                <SearchPlaceholder />
                <div className='text-center pt-8'>
                    <h2 className='text-2xl text-primaryMed dark:text-primary'>
                        Enter Search Criteria
                    </h2>
                    <p className='text-gray-500 pt-4'>
                        Enter search details on the left to see results.
                    </p>
                </div>
            </div>
        </div>
    );
}
