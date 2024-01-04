import styles from "./MobileAssessment.module.css";

const MobileAssessment = ({ setShowSidebar, setShowBackdrop }) => {
    return (
        <div className={styles.assessment}>
            <div>
                <img
                    src="hamburger.svg"
                    alt="hamburger button"
                    role="button"
                    onClick={() => {
                        setShowBackdrop(true);
                        setShowSidebar(true);
                    }}
                />
                <p>Assessment</p>
            </div>
            <div className={styles.laptop}>
                <img src="laptop.svg" alt="laptop logo" />
            </div>
        </div>
    );
};

export default MobileAssessment;
