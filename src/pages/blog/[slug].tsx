import React from "react";
// @ts-ignore
import renderToString from "next-mdx-remote/render-to-string";
// @ts-ignore
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Post from "src/components/post";
import Head from "next/head";
import { Site } from "site";
import { useRouter } from "next/router";

const root = process.cwd();

// const metatags =

export default function BlogPost({ mdxSource, frontMatter }: any) {
  const router = useRouter();
  const content = hydrate(mdxSource);
  return (
    <>
      <Head>
        <title>
          {frontMatter.title} | {Site.siteName}
        </title>
        <meta name="title" content={frontMatter.title} />
        <meta name="description" content={frontMatter.description} />
        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={Site.url} />
        <meta property="og:title" content={frontMatter.title} />
        {frontMatter.description && (
          <meta property="og:description" content={frontMatter.description} />
        )}
        <meta property="og:image" content={Site.url + frontMatter.image} />
        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={Site.url} />
        <meta property="twitter:title" content={frontMatter.title} />
        <meta
          property="twitter:description"
          content={frontMatter.description}
        />
        <meta property="twitter:image" content={Site.url + frontMatter.image} />
        {/* <meta name="keywords" /> */}
      </Head>
      <Post
        title={frontMatter.title}
        date={frontMatter.date}
        slug={frontMatter.slug}
        tags={frontMatter.tags}
        image={frontMatter.image}
      >
        {content}
      </Post>
    </>
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
