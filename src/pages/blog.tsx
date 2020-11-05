import React from "react";
import { InferGetStaticPropsType } from "next";
import { BlogService } from "src/blog/blog.service";
import PostsProvider from "src/hooks/useBlog";
import Search from "src/components/blog-search";
import BlogPosts from "src/components/blog-posts";

interface Props extends InferGetStaticPropsType<typeof getStaticProps> {}

const Home: React.FC<Props> = ({ postData }) => {
  return (
    <PostsProvider original={postData}>
      <Search />
      <BlogPosts />
    </PostsProvider>
  );
};

export default Home;

export async function getStaticProps() {
  const blogService = new BlogService();
  return { props: { postData: await blogService.getPosts() } };
}
