import styles from "./Header.module.css";

const Header = ({ setShowBackdrop, setShowForm }) => {
    return (
        <header className={styles.header}>
            <p className={styles.title}>Create new assessment</p>
            <img
                src="cut.svg"
                alt="cut"
                role="button"
                onClick={() => {
                    setShowForm(false);
                    setShowBackdrop(false);
                }}
            />
        </header>
    );
};

export default Header;
