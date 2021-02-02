import React from "react";
import StoresPreivew from "src/components/stores/stores-preview";
import Input from "src/components/input/input";
import styled from "styled-components";

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
  {
    id: "1",
    title: "مطعم التنور",
    photoUrl: "https://b.top4top.io/p_1852pyskd1.jpg",
    categories: "معجنات، فطائر، ",
  },
  {
    id: "2",
    title: "زهرة الخلد",
    categories: "معجنات، شاورما، فطائر، سندويشات",
  },
  {
    id: "3",
    title: "سمبوسة أبو صالح",
    categories: "شاورما، فطائر",
  },
  {
    id: "4",
    title: "بيزا ريم",
    categories: "معجنات، شاورما، فطائر، سندويشات",
  },
  {
    id: "5",
    title: "أطايب القطيف",
    categories: " شاورما، فطائر، سندويشات",
  },
];

interface Props {}

const Home: React.FC<Props> = () => {
  return <StoresPreivew stores={stores as any} />;
};

export default Home;

// export async function getStaticProps() {
// }
