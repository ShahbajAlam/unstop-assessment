import styles from "./Candidates.module.css";
import Count from "./Count";

const Candidates = () => {
    return (
        <div className={styles.candidates}>
            <p>Candidates</p>
            <div className={styles.lowerContainer}>
                <img
                    src="candidate.svg"
                    alt="candidate"
                    className={styles.candidate}
                />
                <Count
                    number="11,145"
                    increment="+89"
                    title="Total Candidate"
                />
                <div className={styles.dash}>
                    <img src="vbar.svg" alt="vertical bar" />
                </div>

                <Count number="1,14" increment="+89" title="Who Attempted" />
            </div>
        </div>
    );
};

export default Candidates;
