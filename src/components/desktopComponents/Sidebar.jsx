import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.dashboard}>
                <img src="dashboard.svg" alt="dashboard" />
                <p>Dashboard</p>
            </div>
            <div className={styles.assessment}>
                <img src="assessment.svg" alt="assessment" />
                <p>Assessment</p>
            </div>
            <div className={styles.mylibrary}>
                <img src="mylibrary.svg" alt="mylibrary" />
                <p>My Library</p>
            </div>

            <img src="dash.svg" alt="dash" className={styles.dash} />

            <div className={styles.admin}>
                <div>
                    <p>Admin</p>
                </div>
                <div>
                    <img src="roundstatus.svg" alt="round status" />
                    <p>Round Status</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
