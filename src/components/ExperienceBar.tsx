import styles from "../styles/components/ExperienceBar.module.css";

interface ExperienceBarProps {
    percent: number;
}

export default function ExperienceBar(props: ExperienceBarProps) {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${props.percent}%` }} />

                <span
                    className={styles.currentExperience}
                    style={{ left: `${props.percent}%` }}
                >
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}
