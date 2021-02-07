import React from "react";
import StoresPreivew from "src/components/near/stores-preview";
import StoresProvider, { IStores } from "src/hooks/useStores";

const stores: IStores = [
  {
    id: "1",
    title: " مطعم الفراتي",
    photoUrl: "https://d.top4top.io/p_185160wxc1.jpg",
    categories: [{ title: "معجانات", key: "tset1" }],
  },
  {
    id: "6",
    title: "مطعم التنور",
    photoUrl: "https://b.top4top.io/p_1852pyskd1.jpg",
    categories: [{ title: "معجنات", key: "tset1" }],
  },
  {
    id: "2",
    title: "زهرة الخلد",
    categories: [{ title: "معجنات", key: "test1" }],
  },
  {
    id: "3",
    title: "سمبوسة أبو صالح",
    categories: [{ title: "test2", key: "tset2" }],
  },
  {
    id: "4",
    title: "بيزا ريم",
    categories: [{ title: "test3", key: "tset3" }],
  },
  {
    id: "5",
    title: "أطايب القطيف",
    categories: [{ title: "test4", key: "tset4" }],
  },
  {
    id: "7",
    title: "مطعم مايني المقدس",
    categories: [{ title: "test5", key: "tset5" }],
  },
];

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <StoresProvider stores={stores}>
      <StoresPreivew />
    </StoresProvider>
  );
};

export default Home;

// export async function getStaticProps() {
// }
