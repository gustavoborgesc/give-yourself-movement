import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export default function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className={styles.levelUpModalOverlay}>
            <div className={styles.levelUpModalContainer}>
                {/* <header>
                    <button type="button">
                        <img src="/icons/close.svg" alt="Fechar modal" />
                    </button>
                </header>
                <main>
                    <h1>2</h1>

                    <strong>Parabéns</strong>
                    <p>Você alcançou um novo level.</p>
                </main>
                <footer>
                    <a
                        href="http://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Compartilhar no Twitter
                    </a>
                </footer> */}
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
                
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    );
}
