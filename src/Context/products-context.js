import { createContext, useContext, useReducer, useState } from "react";
import { filterReducerFtn } from "../Reducer/filterReducer";
import { initialFilterState } from "../Utils/data";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [coupon, setCoupon] = useState();

  const [filterState, dispatchFilterState] = useReducer(
    filterReducerFtn,
    initialFilterState
  );
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filterState,
        dispatchFilterState,
        modal,
        setModal,
        coupon,
        setCoupon,

      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  return useContext(ProductsContext);
};

export { useProducts, ProductsProvider };
