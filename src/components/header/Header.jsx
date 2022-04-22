import Container from '../container';
import styles from './header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<h1>Custom Hooks</h1>
			</Container>
		</header>
	);
};

export default Header;
