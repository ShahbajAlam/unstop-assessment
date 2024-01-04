import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                <p className={styles.assessment}>Assessment</p>

                <img src="vbar.svg" alt="vertical bar" />

                <div>
                    <p className={styles.myAssessment}>My Assessments</p>
                </div>
            </div>

            <img src="mobile.svg" alt="mobile" className={styles.mobile} />
        </header>
    );
};

export default Header;
