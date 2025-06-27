import Layout, { siteTitle } from "@/components/Layout";
import utileStyles from "../styles/utils.module.css"
import Link from "next/link";
import styles from "../styles/Home.module.css"
import { getPostDatas } from "@/lib/post";
import Head from "next/head";

//SSGの場合
export async function getStaticProps() {
  const allPostData = getPostDatas();

  console.log(allPostData);

  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utileStyles.headingMd}>Next.Jsを勉強中です。</p>
      </section>

      <section>
        <h2>👾勉強ブログ</h2>
        <div className={styles.grid}>
          {allPostData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img className={styles.thumbnailImage} src={`${thumbnail}`} alt={title} />
              </Link>
              <Link href={id} className={utileStyles.boldText}>
                {title}
              </Link>
              <br />
              <small className={utileStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>

      </section>
    </Layout>
  )
}
