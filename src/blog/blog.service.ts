import fs from "fs";
import path from "path";
// @ts-ignore
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";
import { Site } from "site";

const root = process.cwd();

export class BlogService {
  async getPostsSlugs() {
    return fs
      .readdirSync(path.join(root, "posts"))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, "") } }));
  }

  async getPostBySlog(slug: string) {
    const source = fs.readFileSync(
      path.join(root, "posts", `${slug}.mdx`),
      "utf8"
    );
    const { data, content } = matter(source);
    const mdxSource = await renderToString(content);

    return { mdxSource, frontMatter: data };
  }

  async getPosts() {
    const contentRoot = path.join(root, "posts");
    const postData = fs.readdirSync(contentRoot).map((p) => {
      const content = fs.readFileSync(path.join(contentRoot, p), "utf8");
      const frontMatter = matter(content).data;

      return {
        slug: p.replace(/\.mdx/, ""),
        content,
        title: frontMatter.title as string,
        image: (frontMatter.image as string) ?? Site.mainIcon,
        tags: (frontMatter.tags as string[]) ?? [],
        date: frontMatter.date as string,
        frontMatter,
      };
    });

    return postData;
  }
}
