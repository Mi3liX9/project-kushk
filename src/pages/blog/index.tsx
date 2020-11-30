import React from "react";
import { InferGetStaticPropsType } from "next";
import { BlogService } from "src/blog/blog.service";
import PostsProvider from "src/hooks/useBlog";
import Search from "src/components/blog/blog-search";
import BlogPosts from "src/components/blog/blog-posts";
import { Site } from "site";

interface Props extends InferGetStaticPropsType<typeof getStaticProps> {}

const Home: React.FC<Props> = ({ postData }) => {
  const metatags = [
    { property: "description", content: Site.description },
    // Facebook / Opengraph
    { property: "og:type", content: "website" },
    { property: "og:url", content: Site.url },
    { property: "og:title", content: Site.name },
    { property: "og:description", content: Site.description },
    { property: "og:image", content: Site.url + Site.mainIcon },
    // Twitter
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: Site.url },
    { property: "twitter:title", content: Site.name },
    { property: "twitter:description", content: Site.description },
    { property: "twitter:image", content: Site.url + Site.mainIcon },
  ];

  return (
    <PostsProvider original={postData}>
      <Search />
      <BlogPosts metatags={metatags} />
    </PostsProvider>
  );
};

export default Home;

export async function getStaticProps() {
  const blogService = new BlogService();
  return { props: { postData: await blogService.getPosts() } };
}
