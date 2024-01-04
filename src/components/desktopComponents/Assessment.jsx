import styles from "./Assessment.module.css";

const Assessment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.upperLeft}>
                    <img src="job.svg" alt="job" />
                    <p className={styles.name}>Math Assessment</p>
                    <div className={styles.dateContainer}>
                        <p className={styles.job}>Job</p>
                        <div className={styles.dashContainer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2"
                                height="16"
                                viewBox="0 0 2 16"
                                fill="none"
                            >
                                <path d="M1 0V16" stroke="#DADCE0" />
                            </svg>
                        </div>
                        <div className={styles.calender}>
                            <img src="calender.svg" alt="calender" />
                            <p className={styles.date}>20 Apr 2023</p>
                        </div>
                    </div>
                </div>

                <div className={styles.upperRight}>
                    <img src="threedots.svg" alt="three dots" />
                </div>
            </div>

            <div className={styles.lower}>
                <div className={styles.duration}>
                    <div>
                        <p>00</p>
                        <p>Duration</p>
                    </div>
                    <div>
                        <p>00</p>
                        <p>Questions</p>
                    </div>
                </div>

                <div className={styles.share}>
                    <div>
                        <img src="link.svg" alt="link" />
                        <p>Share</p>
                    </div>

                    <div>
                        <p>LP</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assessment;
