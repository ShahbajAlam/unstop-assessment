import styles from "./Backdrop.module.css";

const BackdropDesktop = ({ setShowBackdrop, setShowForm }) => {
    const handleBackdrop = () => {
        setShowForm(false);
        setShowBackdrop(false);
    };
    return <div onClick={handleBackdrop} className={styles.backdrop} />;
};

export default BackdropDesktop;
