import FormBody from "./FormBody";
import FormHeader from "./FormHeader";
import styles from "./Form.module.css";

const Form = ({ setShowForm, setShowBackdrop, showForm }) => {
    return (
        <div
            className={`${styles.form} ${
                !showForm ? styles.hidden : styles.show
            }`}
        >
            <FormHeader
                setShowForm={setShowForm}
                setShowBackdrop={setShowBackdrop}
            />
            <FormBody />
            <div className={styles.btn}>
                <button>Next</button>
            </div>
        </div>
    );
};

export default Form;
