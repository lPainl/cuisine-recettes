import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<null | unknown>(null);

    const fetchInfo = useCallback(async () => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw Error('Fail to consume api');
            }

            const data = await res.json();
            setData(data);
        } catch (error) {
            setError(error);
            setData(null);
        }
    }, []);

    useEffect(() => {
        fetchInfo();
    }, []);

    return { data, error };
};
