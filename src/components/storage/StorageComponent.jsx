import { useRef } from 'react';
import { useLocalStorage } from '../../hooks/use-local-storage';

import Container from '../container';
import styles from './storage-component.module.css';

const StorageComponent = () => {
	const {
		item: userName,
		setItem: setUserName,
		removeItem: removeUserName,
	} = useLocalStorage('user_name');

	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();

	const resetForm = () => {
		firstNameInputRef.current.value = '';
		lastNameInputRef.current.value = '';
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const userName = {
			firtName: firstNameInputRef.current.value,
			lastName: lastNameInputRef.current.value,
		};

		setUserName(userName);
		resetForm();
	};

	return (
		<section>
			<Container>
				<h2>useLocalStorage custom hook</h2>
				{userName && (
					<p>
						Hello <strong>{userName.firtName}</strong>{' '}
						<strong>{userName.lastName}</strong>, this sentence was
						loaded with localStorage data!{' '}
						<small
							className={styles.remove}
							onClick={removeUserName}
						>
							Clear localStorage
						</small>
					</p>
				)}
				<form onSubmit={submitHandler} className={styles.form}>
					<div>
						<label htmlFor='first-name'>First name:</label>
						<input
							id='first-name'
							type='text'
							ref={firstNameInputRef}
						/>
					</div>
					<div>
						<label htmlFor='last-name'>Last name:</label>
						<input
							id='last-name'
							type='text'
							ref={lastNameInputRef}
						/>
					</div>
					<button>Add to localStorage</button>
				</form>
			</Container>
		</section>
	);
};

export default StorageComponent;
