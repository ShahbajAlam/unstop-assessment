import styles from "./MobileSidebar.module.css";

const MobileSidebar = ({ setShowBackdrop, showSidebar, setShowSidebar }) => {
    return (
        <div
            className={`${styles.sidebarMobile} ${
                !showSidebar ? styles.hidden : styles.show
            }`}
        >
            <div className={styles.menu}>
                <p>Menu</p>
                <img
                    src="cut.svg"
                    alt="cut button"
                    width={24}
                    height={24}
                    role="button"
                    onClick={() => {
                        setShowBackdrop(false);
                        setShowSidebar(false);
                    }}
                />
            </div>
            <div className={styles.dashboard}>
                <img
                    src="dashboard.svg"
                    alt="dashboard logo"
                    width={20}
                    height={20}
                />
                <p>Dashboard</p>
            </div>
            <div className={styles.assessment}>
                <img
                    src="assessment.svg"
                    alt="assessment logo"
                    width={20}
                    height={20}
                />
                <p>Assessment</p>
            </div>
            <div className={styles.library}>
                <img
                    src="mylibrary.svg"
                    alt="my library logo"
                    width={20}
                    height={20}
                />
                <p>My Library</p>
            </div>
            <div className={styles.dash}>
                <img src="dash.svg" alt="dash line" />
            </div>
            <div className={styles.roundStatus}>
                <div>
                    <img
                        src="roundstatus.svg"
                        alt="round status"
                        width={20}
                        height={20}
                    />
                    <p>Round Status</p>
                </div>
                <button>Admin</button>
            </div>
        </div>
    );
};

export default MobileSidebar;
