import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../input/input";
import List from "../list/list";
import StorePreview, { StorePreviewProps } from "./store-preview";

interface Props {
  stores: StorePreviewProps[];
}

const StoresPreivew: React.FC<Props> = ({ stores: defaultStores }) => {
  const [stores, setStores] = useState(defaultStores);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const words = value.split(" ");
    const filteredStores = defaultStores.filter(
      (store) =>
        words.every((word) => store.title.includes(word)) &&
        store.categories.includes(category)
    );
    setStores(filteredStores);
  }, [value, category]);

  return (
    <List requiresImage={true}>
      <SearchContainer>
        <Search
          placeholder="شريط البحث"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Categories>
          <Category id="all" onClick={() => setCategory("")}>
            <a href="#all">الكل</a>
          </Category>
          <Category id="test" onClick={() => setCategory("معجنات")}>
            <a href="#test">معجنات</a>
          </Category>
          <Category id="shawarma" onClick={() => setCategory("شاورما")}>
            <a href="#shawarma">شاورما</a>
          </Category>
          <Category id="ftayer" onClick={() => setCategory("فطائر")}>
            <a href="#ftayer">فطائر</a>
          </Category>
          <Category id="sandwitsh" onClick={() => setCategory("سندويشات")}>
            <a href="#sandwitsh">سندويشات</a>
          </Category>
        </Categories>
      </SearchContainer>
      {stores.map((store) => (
        <StorePreview {...store} key={store.id} />
      ))}
    </List>
  );
};

export default StoresPreivew;

const Search = styled(Input)`
  margin: 5px 0;
  width: 100%;
  border-radius: 10px;
  height: 50px;
`;

const SearchContainer = styled.div`
  margin-bottom: 10px;
`;

const Categories = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  padding: 0;
  margin-block: 5px;
`;

const Category = styled.li<{ clicked?: boolean }>`
  padding: 10px;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  background: ${(props) =>
    props.clicked ? `var(--color-main)` : `var(--background-secondary)`};

  :hover {
    background: var(--color-main);
  }
  :target {
    background: var(--color-main);
  }
`;
