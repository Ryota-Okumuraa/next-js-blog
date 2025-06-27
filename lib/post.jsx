import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取り出す
export const getPostDatas = () => {
    const fileName = fs.readdirSync(postDirectory);
    const allPostData = fileName.map((fileName) => {
        const id = fileName.replace(/\.md/, ""); // ファイル名ID

        // マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult.data,
        }
    })
    return allPostData;
}


//getStaticPathで使うpathを取得する
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md/, "")
            }
        };
    });
    /*
[
    {
        params :{
            id: ssg-ssr
        },
    },
    {
        params :{
            id: react-next
        },
    }
]
*/
}

// idに基づいて、ブログ投稿データを返す
export async function getPostData(id) {
    const filePath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const matterResult = matter(fileContents);

    const blogContent = await remark().use(html).process(matterResult.content);

    const blogContentHtml = blogContent.toString();

    return {
        id,
        blogContentHtml,
        ...matterResult.data,
    };
}