import styles from "../styles/components/Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gustavoborgesc.png" alt="Meu avatar" />
            <div>
                <strong>Meu Nome</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}
