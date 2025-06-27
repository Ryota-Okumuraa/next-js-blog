import Head from "next/head";
import styles from "./layout.module.css";
import utileStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css";
import Link from "next/link";

const name = "tiwawa"
export const siteTitle = "Next.js Blog"

function Layout(props) {
    const { children, home } = props;
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/profile.png" alt="プロフィール　ロゴ" className={`${utileStyles.borderCircle} ${layoutStyles.headerHomeImage} `} />
                        <h1 className={utileStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img src="/profile.png" alt="プロフィール　ロゴ" className={utileStyles.borderCircle} />
                        <h1 className={utileStyles.headingXl}>{name}</h1>
                    </>
                )}
            </header>
            <main className={utileStyles.textCenter}>
                {children}
            </main>
            {!home && (
                <div>
                    <Link href="/">← ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;