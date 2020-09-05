import React from 'react';
import styles from './Range.module.css'

export const Range = () => {
    return (
        <div className={styles.Range}>
            <input type="range" value="0" min="0" max="100" step="1" />
        </div>
    );
}