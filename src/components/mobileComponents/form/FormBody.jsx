import styles from "./FormBody.module.css";
import Skills from "./Skills";

const FormBody = () => {
    return (
        <div className={styles.body}>
            <label htmlFor="name" className={styles.nameLabel}>
                Name of assessment
            </label>
            <div className={styles.name}>
                <p>Type Here</p>
            </div>
            <label htmlFor="name" className={styles.purposeLabel}>
                Purpose of the test is
            </label>
            <div className={styles.purpose}>
                <p>Select</p>
                <img src="dropdown.svg" alt="dropdown button" />
            </div>
            <label htmlFor="name" className={styles.descriptionLabel}>
                Description
            </label>
            <div className={styles.purpose}>
                <p>Select</p>
                <img src="dropdown.svg" alt="dropdown button" />
            </div>
            <Skills />
        </div>
    );
};

export default FormBody;
