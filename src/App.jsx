import FetchComponent from './components/fetch/fetch';
import Header from './components/header/Header';
import StorageComponent from './components/storage/StorageComponent';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<FetchComponent />
				<StorageComponent />
			</main>
		</>
	);
};

export default App;
