import styles from "./Purpose.module.css";

const Purpose = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Total Purpose</p>
            <div>
                <img src="purpose.svg" alt="link" />
                <p>11</p>
            </div>
        </div>
    );
};

export default Purpose;
