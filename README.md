# React Custom Hooks

## useFetchData hook

A generic hook to handle fetch requests.

&nbsp;

`use-fetch.js`:

```javascript
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
```

&nbsp;

Using `useDataFetch`:

```javascript
const API_URL = 'some api url';
const { data, isLoading, error, fetchData } = useDataFetch(API_URL);
```

`data`: Refers to data fetched. Default value: null;

`isLoading`: Boolean than is true until fetch is complete. Default value: false;

`error`: Return an error if it occours. Defaulf value: null;

`fetchData`: Function that triggers de fetch event.

&nbsp;

---

&nbsp;

## useLocalStorage hook

A generic hook to handle localStorage data.

&nbsp;

`use-local-storage.js`:

```javascript
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
```

&nbsp;

Using `useLocalStorage`:

```javascript
const { item, setItem, removeItem } = useLocalStorage('key_name');
```

`item`: Refers to data inserted into localStorage. Default value: undefined;

`setItem`: A function that receives the data you want to store as parameter. The item key is already setted as parameter of `useLocalStorage` function;

`removeItem`: Removes the whole item (data and key) from localStorage;

&nbsp;
