import { GetServerSideProps } from "next";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import CompleteChallenges from "../components/CompleteChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/Home.module.css";

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home({
    level,
    currentExperience,
    challengesCompleted,
}: HomeProps) {
    return (
        <ChallengesProvider
            level={level}
            currentExperience={currentExperience}
            challengesCompleted={challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Inicio | G.YS.M</title>
                </Head>

                <ExperienceBar />

                <CountdownProvider>
                    <section>
                        <div>
                            <Profile />
                            <CompleteChallenges />
                            <Countdown />
                        </div>
                        <div>
                            <ChallengeBox />
                        </div>
                    </section>
                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {
        level = "1",
        currentExperience = "0",
        challengesCompleted = "0",
    } = context.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
        },
    };
};
