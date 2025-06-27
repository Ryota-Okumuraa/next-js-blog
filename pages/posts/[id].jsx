import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utileStyles from "../../styles/utils.module.css"
import postsStyles from "./posts.module.css"
import Head from "next/head";


export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        },
    };
}


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className={postsStyles.textLeft}>
                <h1 className={utileStyles.headingXl}>{postData.title}</h1>
                <div className={utileStyles.lightText}>{postData.date}</div>
                <div dangerouslySetInnerHTML={{ __html: postData.blogContentHtml }} />
            </article>
        </Layout >
    );
}