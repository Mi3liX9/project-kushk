export interface Props {
  id: string;
  title: string;
  mainImage: string;
  price: number;
}

const Product: React.FC<Props> = (product) => (
  <div tw="rounded-md hover:ring ring-blue-500 bg-white shadow-sm dark:bg-gray-900 p-1 space-y-2 select-none">
    <img src={product.mainImage} tw="rounded-md" />
    <div tw="px-2 space-y-2">
      <p tw="font-medium">{product.title}</p>
      <p tw="font-bold">{product.price}</p>
    </div>
  </div>
);

export default Product;
