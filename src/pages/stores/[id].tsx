import React from "react";
import Categories from "src/components/shared/categories/categories";
import ProductsPreivew from "src/components/stores/products-preview";
import styled from "styled-components";

type ProductType = { id: string; title: string; price: string };

const products: ProductType[] = [
  { id: "1", title: "بيض بالجبن", price: "5" },
  { id: "2", title: "جبن", price: "4" },
  { id: "3", title: "لحم بالعجين", price: "5" },
  { id: "4", title: "لحم بالجبن", price: "5" },
];

const StorePage = () => {
  return (
    <Container>
      <StoreInfo>
        <StoreImg src="https://d.top4top.io/p_185160wxc1.jpg" />
        <h1>مطعم الفرات</h1>
        <p>
          وصف وكلام طويل عن المطعم ولأن مالي خلق أفكر بكتب كلام وبس لين تجي
          الحزة اللي المفروض أكتب فيها كلام حقيقي وشكرًا لكم على حسن تعاونكم
          والسلام عليكم ورحمة الله وبركاته
        </p>
      </StoreInfo>
      <div>
        <H2>قائمة الوجبات</H2>
        <Categories categories={["test", "test1", "test2"]} />
        <ProductsPreivew products={products} />
      </div>
    </Container>
  );
};

export default StorePage;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background-secondary);
  border-radius: 2px;
  padding: 15px;
  /* margin: 10px; */
  text-align: center;
`;

const StoreImg = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
`;
