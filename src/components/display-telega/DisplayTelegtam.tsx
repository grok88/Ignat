import React from "react";
import style from './DisplayTelegtam.module.css';

export type DisplayTelegramPropsType = {
    fullName: string,
    text: string,
    addedTime: string
}

const DisplayTelegram = (props: DisplayTelegramPropsType) => {
    let {fullName, text, addedTime} = props;
    return (
        <div>
            <h2>Lesson1</h2>
            <div className={style.telegramChatMessage}>
                <div className={style.telegramChatAuthor}>
                    {fullName}
                </div>
                <div className={style.telegramChatText}>
                    {text}
                </div>
                <div className={style.telegramChatTime}>
                    {addedTime}
                </div>
            </div>
        </div>

    );
}
export default DisplayTelegram;