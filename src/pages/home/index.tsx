import React from "react";
import PostsProvider from "src/hooks/useBlog";
import { Store } from "src/models/store";
import StoresPreivew from "src/components/stores/stores-preview";

const stores: Store[] = [
  {
    title: " مطعم الفراتي",
    photoUrl: "https://d.top4top.io/p_185160wxc1.jpg",
    categories: "معجنات، شاورما، فطائر، سندويشات",
    duration: "15",
    meetSource: "ملحمة",
    onlineOnly: false,
    rate: 5,
    location: [{ latitude: "26.5555908", longitude: "50.0326787" }],
  },
  {
    title: "مطعم التنور",
    photoUrl: "https://b.top4top.io/p_1852pyskd1.jpg",
    categories: "معجنات، شاورما، فطائر، سندويشات",
    duration: "10",
    meetSource: "ملحمة",
    onlineOnly: false,
    rate: 4.5,
    location: [{ latitude: "26.5555908", longitude: "50.0326787" }],
  },
];

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <PostsProvider original={stores}>
      {/* <Search /> */}
      {/* <BlogPosts metatags={metatags} /> */}
      <StoresPreivew stores={stores} /> {/* THE LOCATION IS NOT AVAILBLE YET */}
      <StoresPreivew stores={stores} /> {/* THE LOCATION IS NOT AVAILBLE YET */}
      <StoresPreivew stores={stores} /> {/* THE LOCATION IS NOT AVAILBLE YET */}
      <StoresPreivew stores={stores} /> {/* THE LOCATION IS NOT AVAILBLE YET */}
      <StoresPreivew stores={stores} /> {/* THE LOCATION IS NOT AVAILBLE YET */}
      <StoresPreivew stores={stores} /> {/* THE LOCATION IS NOT AVAILBLE YET */}
      <StoresPreivew stores={stores} /> {/* THE LOCATION IS NOT AVAILBLE YET */}
    </PostsProvider>
  );
};

export default Home;

// export async function getStaticProps() {
// }
