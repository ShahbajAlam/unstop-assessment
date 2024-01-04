import styles from "./MobileAssessmentTab.module.css";

const MobileAssessmentTab = () => {
    return (
        <div className={styles.container}>
            <div className={styles.myAssessment}>
                <p>My Assessment</p>
            </div>
            <div className={styles.unstopAssessment}>
                <p>Unstop Assessment</p>
            </div>
        </div>
    );
};

export default MobileAssessmentTab;
