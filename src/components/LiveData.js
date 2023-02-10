import React from "react";

import styles from "./Live.module.css";

const LiveData = ({ updating }) => {
    return (
        <div className={styles.live}>
            <div className={styles.live_top}>
                <div className={styles.live_top_pulse} />
                <span className={styles.live_top_span}>Live</span>
            </div>
            {updating && (
                <div className={styles.live_bottom}>
                    <span className={styles.live_bottom_span}>Updating...</span>

                </div>
            )}
        </div>
    );
};

export default LiveData;