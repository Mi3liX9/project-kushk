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
import { Metatags, Site } from "site";

const root = process.cwd();

export default function BlogPost({ mdxSource, frontMatter }: any) {
  const content = hydrate(mdxSource);
  const metatags: Metatags[] = [
    // GENERAL
    { name: "title", content: frontMatter.title },
    { name: "description", content: frontMatter.excerpt },

    // Open Graph / Facebook
    { name: "og:type", content: "article" },
    { name: "og:url", content: Site.url },
    { name: "og:title", content: frontMatter.title },
    { name: "og:description", content: frontMatter.excerpt },
    { name: "og:image", content: Site.url + frontMatter.image },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: Site.url },
    { name: "twitter:title", content: frontMatter.title },
    { name: "twitter:description", content: frontMatter.excerpt },
    { name: "twitter:image", content: Site.url + frontMatter.image },
  ];
  return (
    <>
      <Head>
        <title>
          {frontMatter.title} | {Site.siteName}
        </title>
        {metatags.map(
          (meta) =>
            (meta.content || meta.property) && (
              <meta
                name={meta.name}
                content={meta.content}
                property={meta.property}
                key={meta.key}
              />
            )
        )}
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
