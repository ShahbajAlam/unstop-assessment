import styles from "./AssessmentOverview.module.css";
import Candidates from "./Candidates";
import Purpose from "./Purpose";
import Source from "./Source";

import TotalAssessments from "./TotalAssessments";

const AssessmentOverview = () => {
    return (
        <div className={styles.container}>
            <p className={styles.overview}>Assessments Overview</p>
            <div className={styles.detailsContainer}>
                <TotalAssessments />
                <Candidates />
                <Source />
                <Purpose />
            </div>
        </div>
    );
};

export default AssessmentOverview;
