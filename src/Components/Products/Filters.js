// import './ProductList.css'

import React from "react";
import { useProducts } from "../../Context/products-context";
import FilterData from "./FilterData";

const ratingStars = [4, 3, 2, 1];

function Filter() {
  const { filterState, dispatchFilterState } = useProducts();

  return (
    <div className="side-content">
      <div className="side-title">
        <button className="btn filter-btn">FILTERS</button>
        <button
          onClick={() => dispatchFilterState({ type: "CLEAR_FILTER" })}
          className="btn clear-btn"
        >
          CLEAR ALL
        </button>
      </div>
      <FilterData />
    </div>
  );
}

export default Filter;
