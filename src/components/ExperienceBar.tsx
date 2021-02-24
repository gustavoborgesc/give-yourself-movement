interface ExperienceBarProps {
    percent: number;
}

export default function ExperienceBar(props: ExperienceBarProps) {
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: `${props.percent}%` }} />

                <span
                    className="current-experience"
                    style={{ left: `${props.percent}%` }}
                >
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}
