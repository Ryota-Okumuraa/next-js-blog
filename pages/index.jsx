import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import utileStyles from "../styles/utils.module.css"
import Link from "next/link";
import styles from "../styles/Home.module.css"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utileStyles.headingMd}>簡単な自己紹介文が入ります！</p>
      </section>

      <section>
        <h2>👾勉強ブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img className={styles.thumbnailImage} src="/thumbnail01.jpg" alt="" />
            </Link>
            <Link href="/" className={utileStyles.boldText}>
              記事１
            </Link>
            <br />
            <small className={utileStyles.lightText}>july 26,2020</small>
          </article>
          <article>
            <Link href="/">
              <img className={styles.thumbnailImage} src="/thumbnail02.jpg" alt="" />
            </Link>
            <Link href="/" className={utileStyles.boldText}>
              記事１
            </Link>
            <br />
            <small className={utileStyles.lightText}>july 26,2020</small>
          </article>
          <article>
            <Link href="/">
              <img className={styles.thumbnailImage} src="/thumbnail03.jpeg" alt="" />
            </Link>
            <Link href="/" className={utileStyles.boldText}>
              記事１
            </Link>
            <br />
            <small className={utileStyles.lightText}>july 26,2020</small>
          </article>
          <article>
            <Link href="/">
              <img className={styles.thumbnailImage} src="/thumbnail04.jpg" alt="" />
            </Link>
            <Link href="/" className={utileStyles.boldText}>
              記事１
            </Link>
            <br />
            <small className={utileStyles.lightText}>july 26,2020</small>
          </article>
        </div>

      </section>
    </Layout>
  )
}
