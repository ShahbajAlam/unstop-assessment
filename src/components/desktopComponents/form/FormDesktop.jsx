import Header from "./Header";
import styles from "./FormDesktop.module.css";
import Body from "./Body";

const FormDesktop = ({ showForm, setShowForm, setShowBackdrop }) => {
    return (
        <form
            className={`${styles.form} ${
                !showForm ? styles.hidden : styles.show
            }`}
        >
            <Header
                setShowBackdrop={setShowBackdrop}
                setShowForm={setShowForm}
            />
            <Body />
        </form>
    );
};

export default FormDesktop;
