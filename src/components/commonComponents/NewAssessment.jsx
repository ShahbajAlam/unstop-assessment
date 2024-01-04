import styles from "./NewAssessment.module.css";

const NewAssessment = ({ setShowBackdrop, setShowForm }) => {
    return (
        <div className={styles.container}>
            <div className={styles.addAssessment}>
                <div className={styles.addBtn}>
                    <img
                        src="add.svg"
                        alt="add button"
                        role="button"
                        onClick={() => {
                            setShowBackdrop(true);
                            setShowForm(true);
                        }}
                    />
                </div>
                <p>New Assessment</p>
            </div>
            <p>
                From here you can add questions of multiple types like MCQs,
                subjective (text or paragraph)!
            </p>
        </div>
    );
};

export default NewAssessment;
