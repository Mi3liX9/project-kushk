import React from "react";
import PostsProvider from "src/hooks/useBlog";
import StoresPreivew from "src/components/stores/stores-preview";

type Store = {
  id: string;
  title: string;
  photoUrl?: string;
  categories: string;
};

const stores: Store[] = [
  {
    id: "1",
    title: " مطعم الفراتي",
    photoUrl: "https://d.top4top.io/p_185160wxc1.jpg",
    categories: "معجنات، شاورما، فطائر، سندويشات",
  },
  // {
  //   id: "1",
  //   title: "مطعم التنور",
  //   photoUrl: "https://b.top4top.io/p_1852pyskd1.jpg",
  //   categories: "معجنات، شاورما، فطائر، سندويشات",
  // },
  // {
  //   id: "1",
  //   title: "زهرة الخلد",
  //   categories: "معجنات، شاورما، فطائر، سندويشات",
  // },
  // {
  //   id: "1",
  //   title: "سمبوسة أبو صالح",
  //   categories: "معجنات، شاورما، فطائر، سندويشات",
  // },
  // {
  //   id: "1",
  //   title: "بيزا ريم",
  //   categories: "معجنات، شاورما، فطائر، سندويشات",
  // },
  // {
  //   id: "1",
  //   title: "أطايب القطيف",
  //   categories: "معجنات، شاورما، فطائر، سندويشات",
  // },
];

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <PostsProvider original={stores}>
      <StoresPreivew stores={stores as any} />
    </PostsProvider>
  );
};

export default Home;

// export async function getStaticProps() {
// }
