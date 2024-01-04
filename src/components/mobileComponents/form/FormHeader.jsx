import styles from "./FormHeader.module.css";

const FormHeader = ({ setShowForm, setShowBackdrop }) => {
    return (
        <header className={styles.container}>
            <div className={styles.innerContainer}>
                <p>Sub-Section Details</p>
                <div className={styles.iconContainer}>
                    <div>
                        <img
                            src="cut-orange.svg"
                            alt="cut"
                            role="button"
                            onClick={() => {
                                setShowBackdrop(false);
                                setShowForm(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default FormHeader;
