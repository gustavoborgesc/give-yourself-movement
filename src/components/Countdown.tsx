import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

export default function Countdown() {
    const initialTime = 1 * 60;

    const [time, setTime] = useState(initialTime);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, "0")
        .split("");
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, "0")
        .split("");

    function startCountdown() {
        setActive(true);
    }

    function finishCountdown() {
        setActive(false);
        setTime(initialTime);
    }

    useEffect(() => {
        if (active && time) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (active && !time) {
            setActive(false);
            setTime(initialTime);
        }
    }, [active, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            <button
                type="button"
                className={styles.countdownButton}
                onClick={!active ? startCountdown : finishCountdown}
            >
                {!active ? "Iniciar um ciclo" : "Abandonar o ciclo"}
            </button>
        </div>
    );
}
