import Head from "next/head";
import styles from "./layout.module.css";
import utileStyles from "../styles/utils.module.css";

const name = "tiwawa"
export const siteTitle = "Next.js Blog"

function Layout(props) {
    const { children } = props;
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/profile.png" alt="プロフィール　ロゴ" className={utileStyles.borderCircle} />
                <h1 className={utileStyles.heading2Xl}>{name}</h1>
            </header>
            <main className={utileStyles.textCenter}>
                {children}
            </main>
        </div>
    );
}

export default Layout;