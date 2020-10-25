import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/blog");
  });

  return <div></div>;
};

export default Home;
