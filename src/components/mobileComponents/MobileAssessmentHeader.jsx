import styles from "./MobileAssessmentHeader.module.css";

const MobileAssessmentHeader = () => {
    return (
        <div className={styles.container}>
            <p>My Assessment</p>
            <div className={styles.imageContainer}>
                <div className={styles.search}>
                    <img src="search.svg" alt="search logo" />
                </div>
                <div className={styles.filter}>
                    <img src="filter.svg" alt="filter logo" />
                </div>
                <div className={styles.bar}>
                    <img src="bar.svg" alt="bar logo" />
                </div>
            </div>
        </div>
    );
};

export default MobileAssessmentHeader;
