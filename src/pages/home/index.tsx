import React from "react";
import { InferGetStaticPropsType } from "next";
import PostsProvider from "src/hooks/useBlog";
import BlogPosts from "src/components/stores/blog-posts";
import { Site } from "site";
import StorePreview from "src/components/stores/store-preview";
import { Store } from "src/models/store";

const products: Store[] = [
  { title: "Furati", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 2", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 3", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 4", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 5", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 6", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 7", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 8", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 9", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
  { title: "Test 10", photoUrl: "https://d.top4top.io/p_185160wxc1.jpg" },
];

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <PostsProvider original={products}>
      {/* <Search /> */}
      {/* <BlogPosts metatags={metatags} /> */}
      {products.map((store) => (
        <StorePreview
          title={store.title}
          photoUrl={store.photoUrl}
          categories="معجنات"
          deliveryPrice="5"
          distance="4"
          rate="5"
          meetSource=""
          duration="15"
        />
      ))}
    </PostsProvider>
  );
};

export default Home;

// export async function getStaticProps() {
// }
