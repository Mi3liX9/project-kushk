import React from "react";
import StoresPreivew from "src/components/stores/stores-preview";

type Store = {
  id: string;
  title: string;
  photoUrl?: string;
  categories: string[];
};

const stores: Store[] = [
  {
    id: "1",
    title: " مطعم الفراتي",
    photoUrl: "https://d.top4top.io/p_185160wxc1.jpg",
    categories: ["معجنات"],
  },
  {
    id: "6",
    title: "مطعم التنور",
    photoUrl: "https://b.top4top.io/p_1852pyskd1.jpg",
    categories: ["لحوم"],
  },
  {
    id: "2",
    title: "زهرة الخلد",
    categories: ["شاورما"],
  },
  {
    id: "3",
    title: "سمبوسة أبو صالح",
    categories: ["ساندويتشات"],
  },
  {
    id: "4",
    title: "بيزا ريم",
    categories: ["بيتزا"],
  },
  {
    id: "5",
    title: "أطايب القطيف",
    categories: ["شاورما", "ساندويتشات"],
  },
  {
    id: "7",
    title: "مطعم مايني المقدس",
    categories: ["شاورما", "مادري"],
  },
];

interface Props {}

const Home: React.FC<Props> = () => {
  return <StoresPreivew stores={stores as any} />;
};

export default Home;

// export async function getStaticProps() {
// }
