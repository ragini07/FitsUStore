import { createContext, useContext, useReducer, useState } from "react";
// import { productData } from "../data";
import { filterReducerFtn } from "../Reducer/filterReducer";

const ProductsContext = createContext();

const  ProductsProvider= ({ children }) => {

    const [products , setProducts ] = useState([])
    const [filterState , dispatchFilterState] = useReducer(filterReducerFtn , {
        sortBy : "" ,
        priceRange : 10000,
        ratingBy : 0 , 
        showFastDeliveryOnly : false ,
        showOutOfStock : false ,
        category : {Beds : false , Lighting : false ,Decor : false , Sofas: false}    
    })
  return (
    <ProductsContext.Provider
      value={{products , setProducts , filterState , dispatchFilterState} }
    >
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  return useContext(ProductsContext);
}

export { useProducts , ProductsProvider}