import styles from "./Body.module.css";

const Body = () => {
    return (
        <div className={styles.container}>
            <label htmlFor="name" className={styles.nameLabel}>
                Name of assessment
            </label>
            <div className={styles.nameInput}>
                <p>Type Here</p>
            </div>

            <label htmlFor="name" className={styles.purposeLabel}>
                Purpose of the test is
            </label>
            <div className={styles.purposeInput}>
                <p>Select</p>
                <img src="dropdown.svg" alt="dropdown" />
            </div>

            <label htmlFor="name" className={styles.descLabel}>
                Description
            </label>
            <div className={styles.descInput}>
                <p>Select</p>
                <img src="dropdown.svg" alt="dropdown" />
            </div>

            <div className={styles.skillsContainer}>
                <div className={styles.title}>
                    <p>Skills</p>
                </div>

                <div className={styles.list}>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <p>UI/UX and Design</p>
                            <img src="cut.svg" alt="cut" />
                        </div>
                        <div className={styles.item}>
                            <p>No of Question</p>
                            <img src="cut.svg" alt="cut" />
                        </div>
                        <div className={styles.item}>
                            <p>Web Development</p>
                            <img src="cut.svg" alt="cut" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <p>No of Question</p>
                            <img src="cut.svg" alt="cut" />
                        </div>
                        <div className={styles.item}>
                            <p>Web Development</p>
                            <img src="cut.svg" alt="cut" />
                        </div>
                    </div>
                </div>

                <div className={styles.skillInput}>
                    <p>Type Here</p>
                </div>

                <label htmlFor="duration" className={styles.durationLabel}>
                    Duration of assessment
                </label>
                <div className={styles.durationInput}>
                    <p>HH:MM:SS</p>
                </div>

                <div className={styles.btnContainer}>
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Body;
