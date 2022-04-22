import { useEffect, useState } from 'react';

export const useLocalStorage = (key) => {
	const [item, setItem] = useState();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const localItem = JSON.parse(localStorage.getItem(key));
			if (localItem) {
				setItem(localItem);
			}
		}
	}, [key]);

	useEffect(() => {
		if (item !== undefined) {
			if (typeof window !== 'undefined') {
				localStorage.setItem(key, JSON.stringify(item));
			}
		}
	}, [item, key]);

	const removeItem = () => {
		if (typeof window !== 'undefined') {
			setItem();
			localStorage.removeItem(key);
		}
	};

	return {
		item,
		setItem,
		removeItem,
	};
};
