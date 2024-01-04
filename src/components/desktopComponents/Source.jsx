import Count from "./Count";
import styles from "./Source.module.css";

const Source = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Candidates Source</p>
            <div className={styles.details}>
                <img src="source.svg" alt="source" />
                <Count number="11,000" increment="+89" title="Email" />
                <div className={styles.dash}>
                    <img src="vbar.svg" alt="vertical bar" />
                </div>
                <Count number="145" increment="+89" title="Social Share" />
                <div className={styles.dash}>
                    <img src="vbar.svg" alt="vertical bar" />
                </div>
                <Count number="145" increment="+89" title="Unique Link" />
            </div>
        </div>
    );
};

export default Source;
