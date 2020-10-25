import React from "react";
// @ts-ignore
import renderToString from "next-mdx-remote/render-to-string";
// @ts-ignore
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Post from "src/components/post";

const root = process.cwd();

export default function BlogPost({ mdxSource, frontMatter }: any) {
  const content = hydrate(mdxSource);
  return (
    <Post
      title={frontMatter.title}
      date={frontMatter.date}
      slug={frontMatter.slug}
      tags={frontMatter.tags}
      image={frontMatter.image}
    >
      {content}
    </Post>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, "posts"))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, "") } })),
  };
}
export async function getStaticProps({ params }: any) {
  const source = fs.readFileSync(
    path.join(root, "posts", `${params.slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content);
  return { props: { mdxSource, frontMatter: data } };
}
