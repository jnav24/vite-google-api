import clsx from 'clsx';
import Input from './form/Input';
import Selections from './form/Selections';
import Button from './form/Button';
import { FormEvent, useMemo, useState } from 'react';

export type FormDataType = {
    search: string;
    location: string;
};

type Props = {
    handleSearch: (data: FormDataType) => void;
};

const initialFormData = { search: '', location: '' };

export default function Form({ handleSearch }: Props) {
    const [formData, setFormData] = useState(initialFormData);

    const isButtonDisabled = useMemo(
        () => !formData.search.trim() || !formData.location,
        [formData],
    );

    const locations = [
        { label: 'Snowmass, CO', value: '39.2130, -106.9378' },
        { label: 'Malibu, CA', value: '34.0259, -118.7798' },
        { label: 'Catskill, NY', value: '42.2146, -73.9595' },
        { label: 'Grand Teton National Park, WY', value: '43.7904, -110.6818' },
        { label: 'Columbia River Gorge, OR', value: '45.7253, -121.7300' },
    ];

    const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(formData);
    };

    return (
        <>
            <form onSubmit={handleFormSubmission}>
                <div
                    className={clsx(
                        'rounded-lg shadow-lg p-4 flex flex-col justify-between align-middle',
                        'bg-white shadow-gray-300 space-y-6',
                        'dark:bg-gray-700 dark:shadow-gray-900',
                    )}
                >
                    <div className='flex-1'>
                        <Input
                            label='Search'
                            value={formData.search}
                            handleChange={(search) => setFormData({ ...formData, search })}
                        />
                    </div>

                    <div>
                        <Selections
                            items={locations}
                            label='Locations'
                            selectedValue={formData.location}
                            handleSelectedValue={(location) =>
                                setFormData({ ...formData, location })
                            }
                        />
                    </div>

                    <div className='flex flex-col justify-end'>
                        <Button disabled={isButtonDisabled} submit>
                            Search
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}
