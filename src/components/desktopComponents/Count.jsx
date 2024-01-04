import styles from "./Count.module.css";

const Count = ({ number, increment, title }) => {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <p>{number}</p>
                <p>{increment}</p>
            </div>
            <div className={styles.lower}>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Count;
