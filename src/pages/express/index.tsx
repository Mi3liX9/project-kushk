import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Input from "src/components/shared/forms/input";

const Express = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, [url]);

  const getData = async () => {
    try {
      const test = await fetch(url);
      setData(await test.json());
      console.log("hi");
    } catch {
      setData({});
    }
  };

  return (
    <div>
      <Input
        type="text"
        name="url"
        label="رابط الطلب"
        placeholder="اضف رابط الطلب"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <pre>{JSON.stringify({ url, data }, null, 2)}</pre>
    </div>
  );
};

export default Express;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
