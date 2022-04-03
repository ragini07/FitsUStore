import { createContext, useContext, useReducer, useState } from "react";
import { filterReducerFtn } from "../Reducer/filterReducer";
import { initialFilterState } from "../Utils/data";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterState, dispatchFilterState] = useReducer(
    filterReducerFtn,
    initialFilterState
  );
  return (
    <ProductsContext.Provider
      value={{ products, setProducts, filterState, dispatchFilterState }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  return useContext(ProductsContext);
};

export { useProducts, ProductsProvider };
