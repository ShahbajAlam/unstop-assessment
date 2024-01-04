import NewAssessment from "../commonComponents/NewAssessment";
import Assessment from "./Assessment";
import styles from "./MyAssessment.module.css";

const MyAssessment = ({ setShowForm, setShowBackdrop }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>My Assessment</p>
            <div className={styles.list}>
                <NewAssessment
                    setShowBackdrop={setShowBackdrop}
                    setShowForm={setShowForm}
                />
                {[0, 1].map((_, i) => (
                    <Assessment key={i} />
                ))}
            </div>
        </div>
    );
};

export default MyAssessment;
