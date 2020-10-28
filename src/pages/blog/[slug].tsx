import React from "react";
// @ts-ignore
import hydrate from "next-mdx-remote/hydrate";
import Post from "src/components/post";
import Head from "next/head";
import { Metatags, Site } from "site";
import { BlogService } from "src/blog/blog.service";

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
    { name: "og:image", content: frontMatter.image },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: Site.url },
    { name: "twitter:title", content: frontMatter.title },
    { name: "twitter:description", content: frontMatter.excerpt },
    { name: "twitter:image", content: frontMatter.image },
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

const blogService = new BlogService();
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: await blogService.getPostsSlugs(),
  };
}
export async function getStaticProps({ params }: any) {
  const { frontMatter, mdxSource } = await blogService.getPostBySlog(
    params.slug
  );
  return { props: { mdxSource, frontMatter } };
}
