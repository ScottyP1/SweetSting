import React from 'react';
import styles from './ShimmerLoader.module.css';

const ShimmerLoader = () => {
    return (
        <div className={styles['shimmer-wrapper']}>
            <div className={styles.shimmer}></div>
        </div>
    );
};

export default ShimmerLoader;
