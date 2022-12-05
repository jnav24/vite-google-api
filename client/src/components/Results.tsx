import { SearchResult } from '../App';

type Props = {
    data: SearchResult[];
};

export default function Results({ data }: Props) {
    return (
        <>
            {data.map((item) => (
                <div
                    className='bg-white dark:bg-gray-700 rounded-lg py-4 px-4 mb-6 space-y-4'
                    key={item.place_id}
                >
                    <h2 className='text-2xl'>{item.name}</h2>
                    <div className='flex flex-row items-center text-gray-400 space-x-4'>
                        <p>{item.vicinity}</p>
                        <p>|</p>
                        <p>
                            Rating: {item.rating} ({item.user_ratings_total})
                        </p>
                    </div>

                    <div className='flex flex-row space-x-4'>
                        {item.types.map((type, index) => (
                            <div
                                key={index}
                                className='bg-gray-300 dark:bg-gray-900 text-sm p-2 rounded text-gray-600 dark:text-gray-400'
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
