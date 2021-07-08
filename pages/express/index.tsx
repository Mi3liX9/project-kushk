import { useEffect, useState } from "react";
import Input from "app/components/elements/input";
import Product from "app/components/templates/stores/product-preview";

type AliExpressProduct = {
  url: string;
  informaion: string;
};

const Express = () => {
  const [url, setUrl] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const [products, setProducts] = useState<AliExpressProduct[]>([]);

  const clickHandler = () => {
    if (url && info) {
      setProducts([...products, { informaion: info, url }]);
      setUrl("");
      setInfo("");
    }
  };

  return (
    <div tw="space-y-2">
      قم باضافة معلومات طلبك هنا:
      <Input
        type="text"
        name="url"
        label="رابط الطلب"
        placeholder="اضف رابط الطلب"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Input
        type="textarea"
        name="information"
        label="معلومات الطلب"
        placeholder="اكتب معلومات الطلب مثل اللون والشكل إلخ..."
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <button
        tw="bg-blue-500 opacity-90 hover:opacity-100 w-full"
        onClick={clickHandler}
      >
        اضافة إلى السلة
      </button>
      <div tw="m-10" />
      {products.map(({ url, informaion: info }) => (
        <>
          <Product id={url} title={url} descreption={info} price="0" />
          <div tw="flex gap-1">
            <button tw="bg-blue-600 opacity-90 hover:opacity-100">
              تعديل{" "}
            </button>
            <button tw="bg-red-600 opacity-90 hover:opacity-100">ازالة</button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Express;
