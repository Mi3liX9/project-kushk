import React from "react";
// @ts-ignore
import hydrate from "next-mdx-remote/hydrate";
import Post from "src/components/post";
import Head from "next/head";
import { Metatags, Site } from "site";
import { BlogService } from "src/blog/blog.service";
import { InferGetStaticPropsType } from "next";
import mdxOptions from "src/mdx-options";

const BlogPost: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  mdxSource,
  frontMatter,
  next,
  previous,
}) => {
  const content = hydrate(mdxSource, mdxOptions);
  const metatags: Metatags[] = [
    // GENERAL
    { property: "title", content: frontMatter.title },
    { property: "description", content: frontMatter.excerpt },

    // Open Graph / Facebook
    { property: "og:type", content: "article" },
    { property: "og:url", content: Site.url },
    { property: "og:title", content: frontMatter.title },
    { property: "og:description", content: frontMatter.excerpt },
    { property: "og:image", content: Site.url + frontMatter.image },

    // Twitter
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: Site.url },
    { property: "twitter:title", content: frontMatter.title },
    { property: "twitter:description", content: frontMatter.excerpt },
    { property: "twitter:image", content: Site.url + frontMatter.image },
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
                // name={meta.property}
                content={meta.content}
                property={meta.property}
                key={meta.key ?? meta.property}
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
        next={next ? { title: next.title, slug: next.slug } : undefined}
        previous={
          previous ? { title: previous.title, slug: previous.slug } : undefined
        }
      >
        {content}
      </Post>
    </>
  );
};

export default BlogPost;

const blogService = new BlogService();
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: await blogService.getPostsSlugs(),
  };
}
export async function getStaticProps({ params }: any) {
  const {
    frontMatter,
    mdxSource,
    next,
    previous,
  } = await blogService.getPostBySlog(params.slug);
  return { props: { mdxSource, frontMatter, next, previous } };
}
