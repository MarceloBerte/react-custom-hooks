import { useDataFetch } from '../../hooks/use-fetch';
import Container from '../container';

const FetchComponent = () => {
	const API_URL = 'https://swapi.dev/api/people';
	const { data, isLoading, error, fetchData } = useDataFetch(API_URL);

	const fetchResult = data?.results?.map((hero, index) => (
		<li key={index}>{hero.name}</li>
	));
	const hasError = error && (
		<p className='error'>Something went wrong on fetching data!</p>
	);

	return (
		<section>
			<Container>
				<h2>useFetch custom hook</h2>
				<p>
					Click the button bellow to fetch some Star Wars' characters'
					names!
				</p>
				<div>
					<button onClick={fetchData} disabled={isLoading}>
						{!isLoading
							? 'Fetch Star Wars characters'
							: 'Loading...'}
					</button>
				</div>

				{hasError}
				{fetchResult && <ul>{fetchResult}</ul>}
			</Container>
		</section>
	);
};

export default FetchComponent;
