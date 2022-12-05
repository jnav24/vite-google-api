export default function LoadingResults() {
    return (
        <>
            {[...Array(3).keys()].map((_, index) => (
                <div
                    className='animate-pulse bg-white dark:bg-gray-700 rounded-lg py-4 px-4 mb-6 space-y-4'
                    key={index}
                >
                    <div className='w-48 h-10 bg-gray-300 dark:bg-gray-600' />
                    {[...Array(3).keys()].map((_, int) => (
                        <div className='w-full h-6 bg-gray-300 dark:bg-gray-600' key={int} />
                    ))}
                </div>
            ))}
        </>
    );
}
