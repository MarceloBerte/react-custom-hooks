import { useState } from 'react';

export const useDataFetch = (url, options = {}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	if (!url) return;

	const fetchData = async () => {
		setIsLoading(true);
		await fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setError(null);
			})
			.catch((error) => {
				setData(null);
				setError(error);
				console.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return {
		data,
		isLoading,
		error,
		fetchData,
	};
};
