import Form, { FormDataType } from './components/Form';
import { useState } from 'react';
import InitialResults from './components/InitialResults';
import LoadingResults from './components/LoadingResults';
import NoResults from './components/NoResults';
import Results from './components/Results';

export type SearchResult = {
    business_status: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
        viewport: {
            northeast: {
                lat: number;
                lng: number;
            };
            southwest: {
                lat: number;
                lng: number;
            };
        };
    };
    icon: string;
    icon_background_color: string;
    name: string;
    photos: Array<{
        height: number;
        html_attributes: string[];
        photo_reference: string;
        width: number;
    }>;
    place_id: string;
    plus_code: {
        compound_code: string;
        global_code: string;
    };
    price_level: number;
    rating: number;
    reference: string;
    scope: string;
    types: string[];
    user_ratings_total: number;
    vicinity: string;
};

type APIResponse = {
    data: SearchResult[];
    status: number;
    message: string;
};

export default function App() {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<Array<SearchResult>>([]);

    const getLocationData = async (data: FormDataType): Promise<APIResponse> => {
        const url = new URL(`${import.meta.env.VITE_API_URL}/search`);
        url.searchParams.append('keyword', data.search);
        url.searchParams.append('location', data.location);
        const response = await fetch(url, { method: 'GET' });
        return response.json();
    };

    const handleSearch = async (formData: FormDataType) => {
        setHasSubmitted(true);
        setIsLoading(true);
        const { data } = await getLocationData(formData);
        setResults(data);
        setIsLoading(false);
    };

    return (
        <main className='flex flex-row justify-center'>
            <article className='container pt-8 px-4 md:px-0'>
                <h1 className='text-3xl dark:text-primary text-primaryDark mb-6'>Nearby Search</h1>
                <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-12 lg:space-y-0'>
                    <aside className='lg:w-1/3'>
                        <Form handleSearch={handleSearch} />
                    </aside>
                    <section className='flex-1'>
                        {!hasSubmitted && !isLoading && <InitialResults />}
                        {hasSubmitted && isLoading && <LoadingResults />}
                        {hasSubmitted && !isLoading && !results.length && <NoResults />}
                        {hasSubmitted && !isLoading && !!results.length && (
                            <Results data={results} />
                        )}
                    </section>
                </div>
            </article>
        </main>
    );
}
