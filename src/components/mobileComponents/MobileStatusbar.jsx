import styles from "./MobileStatusbar.module.css";

const MobileStatusbar = () => {
    return (
        <div className={styles.statusbar}>
            <img src="time.svg" alt="time" />
            <div>
                <img
                    src="network.svg"
                    alt="network image"
                    className={styles.network}
                />
                <img src="wifi.svg" alt="wifi image" className={styles.wifi} />
                <img
                    src="battery.svg"
                    alt="battery image"
                    className={styles.battery}
                />
            </div>
        </div>
    );
};

export default MobileStatusbar;
