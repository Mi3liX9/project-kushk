import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Store } from "src/features/stores/store";

type IStoreContext = {
  defaultStores: Store[];
  stores: Store[];
  setStores: Dispatch<SetStateAction<Store[]>>;
};

interface Props {
  stores: Store[];
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
