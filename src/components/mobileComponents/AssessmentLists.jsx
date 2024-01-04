import { data } from "../../data";

import styles from "./AssessmentLists.module.css";
import MobileAssessmentHeader from "./MobileAssessmentHeader";
import NewAssessment from "../commonComponents/NewAssessment";
import Assessment from "./Assessment";

const AssessmentLists = ({ setShowBackdrop, setShowForm }) => {
    return (
        <div className={styles.container}>
            <MobileAssessmentHeader />
            <NewAssessment
                setShowForm={setShowForm}
                setShowBackdrop={setShowBackdrop}
            />
            {data.map((d, i) => (
                <Assessment key={i} data={d} />
            ))}
        </div>
    );
};

export default AssessmentLists;
