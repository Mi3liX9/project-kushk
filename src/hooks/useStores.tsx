import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type StoreType = {
  id: string;
  title: string;
  photoUrl?: string;
  categories: string[];
};

export type IStores = StoreType[];

type IStoreContext = {
  defaultStores: IStores;
  stores: IStores;
  setStores: Dispatch<SetStateAction<IStores>>;
};

interface Props {
  stores: IStores;
}

export const StoresContext = createContext<IStoreContext>({
  defaultStores: [],
  stores: [],
  setStores: () => ({}),
});

export const useStores = () => useContext(StoresContext);

const StoresProvider: React.FC<Props> = ({
  children,
  stores: defaultStores,
}) => {
  const [stores, setStores] = useState(defaultStores);
  return (
    <StoresContext.Provider value={{ defaultStores, stores, setStores }}>
      {children}
    </StoresContext.Provider>
  );
};

export default StoresProvider;
