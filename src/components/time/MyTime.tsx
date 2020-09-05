import React, {useState} from 'react';
import styles from './MyTime.module.css'
import {MyButton} from '../../common/button/MyButton';

export const MyTime = () => {
    let options = {
        // era: 'long',
        // year: 'numeric',
        // month: 'long',
        // day: 'numeric',
        // weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const [time, setTime] = useState(new Date());
    const [id, setId] = useState<NodeJS.Timeout | null>(null);

    const [display, setDisplay] = useState<boolean>(false);

    const tick = () => {
        setTime(new Date());
    }

    const startTime = () => {
        if (id) {
            clearInterval(id);
        }
        const timer = setInterval(() => tick(), 1000);
        setId(timer)
    }

    const stopTime = () => {
        if (id) {
            clearInterval(id);
        }
    }

    const onMouseEnter = () => {
        setDisplay(true);
    }
    const onMouseLeave = () => {
        setDisplay(false);
    }

    return (
        <div className={styles.AppClock}>
            {display && <span className={styles.eav_Date}>
                <div className={styles.d}>{time.getDate()}</div>
                <div className={styles.m}>{time.getMonth() +1}</div>
                <div className={styles.y}>{time.getFullYear()}</div>
                    </span>
            }
            <div className={styles.AppClockTime} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> Текущее
                время: {time.toLocaleString("ru", options)}</div>
            <MyButton title={'Start Time'} type={'default'} onClickHandler={startTime}/>
            <MyButton title={'Stop Time'} type={'default'} onClickHandler={stopTime}/>

        </div>
    );
}