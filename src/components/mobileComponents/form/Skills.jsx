import styles from "./Skills.module.css";

const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p>Skills</p>
            </div>
            <div className={styles.skills}>
                <div className={styles.skillsContainer}>
                    <div className={styles.skill}>
                        <p>UI/UX and Design</p>
                        <img src="close.svg" alt="close" />
                    </div>
                    <div className={styles.skill}>
                        <p>Web Development</p>
                        <img src="close.svg" alt="close" />
                    </div>
                    <div className={styles.skill}>
                        <p>UI/UX and Design</p>
                        <img src="close.svg" alt="close" />
                    </div>
                    <div className={styles.skill}>
                        <p>No of Question</p>
                        <img src="close.svg" alt="close" />
                    </div>
                    <div className={styles.skill}>
                        <p>Web Development</p>
                        <img src="close.svg" alt="close" />
                    </div>
                </div>
            </div>
            <div className={styles.input}>
                <p>Type here</p>
            </div>
        </div>
    );
};

export default Skills;
