import styles from "./Assessment.module.css";

const Assessment = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.upperLeft}>
                    <img
                        src="job.svg"
                        alt="job logo"
                        className={styles.jobLogo}
                    />
                    <div className={styles.details}>
                        <p className={styles.assessmentName}>{data.name}</p>
                        <div>
                            <p className={styles.job}>{data.type}</p>
                            <img
                                src="vbar.svg"
                                alt="vertical bar"
                                className={styles.bar}
                            />
                            <img
                                src="clock.svg"
                                alt="clock logo"
                                className={styles.clock}
                            />
                            <p className={styles.date}>{data.time}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.upperRight}>
                    <img src="threedots.svg" alt="three dots" />
                </div>
            </div>
            <img src="dash.svg" alt="dash" className={styles.dash} />
            <div className={styles.lower}>
                <div className={styles.lowerLeft}>
                    <div>
                        <p>{data.duration}</p>
                        <p>Duration</p>
                    </div>
                    <div>
                        <p>{data.questions}</p>
                        <p>Questions</p>
                    </div>
                </div>
                <div className={styles.lowerRight}>
                    <div className={styles.linkContainer}>
                        <img src="link.svg" alt="link logo" />
                        <p>Share</p>
                    </div>
                    {+data.numbers === 0 && (
                        <div className={styles.single}>
                            <p>LP</p>
                        </div>
                    )}
                    {+data.numbers !== 0 && (
                        <div className={styles.multiple}>
                            <div className={styles.circleContainer}>
                                <div>
                                    <p>LP</p>
                                </div>
                                <div>
                                    <p>LP</p>
                                </div>
                                <div>
                                    <p>LP</p>
                                </div>
                            </div>
                            <p className={styles.numbers}>+{data.numbers}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Assessment;
