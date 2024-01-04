import styles from "./Backdrop.module.css";

const Backdrop = ({ setShowSidebar, setShowBackdrop, setShowForm }) => {
    const handleBackdrop = () => {
        setShowBackdrop(false);
        setShowSidebar(false);
        setShowForm(false);
    };
    return <div onClick={handleBackdrop} className={styles.backdrop} />;
};

export default Backdrop;
