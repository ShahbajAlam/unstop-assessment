import styles from "./TotalAssessments.module.css";

const TotalAssessments = () => {
    return (
        <div className={styles.total}>
            <p>Total Assessments</p>
            <div>
                <div>
                    <img src="agenda.svg" alt="agenda" />
                </div>
                <p>34</p>
            </div>
        </div>
    );
};

export default TotalAssessments;
