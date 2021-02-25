import Head from "next/head";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>G.YS.M</title>
            </Head>

            <ChallengesProvider>
                <Component {...pageProps} />
            </ChallengesProvider>
        </>
    );
}

export default MyApp;
