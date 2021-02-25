import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const initialTime = 0.1 * 60;

    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, "0")
        .split("");
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, "0")
        .split("");

    function startCountdown() {
        setIsActive(true);
        setHasFinished(false);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(initialTime);
    }

    useEffect(() => {
        if (isActive && time) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && !time) {
            setIsActive(false);
            setHasFinished(true);
            startNewChallenge();
        }
    }, [isActive, time]);

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

            {hasFinished ? (
                <button className={styles.countdownButton} disabled>
                    Ciclo encerrado
                </button>
            ) : (
                <button
                    type="button"
                    className={`${styles.countdownButton} ${
                        isActive ? styles.countdownButtonActive : ""
                    }`}
                    onClick={!isActive ? startCountdown : resetCountdown}
                >
                    {!isActive ? "Iniciar um ciclo" : "Abandonar o ciclo"}
                </button>
            )}
        </div>
    );
}
