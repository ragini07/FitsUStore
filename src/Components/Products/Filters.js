

import {useState} from 'react'
import { useProducts } from "../../Context/products-context";
import FilterData from "./FilterData";

const ratingStars = [4, 3, 2, 1];

function Filter() {
  const [toggleSideBar , setToggleSideBar] = useState(false)
  const { filterState, dispatchFilterState } = useProducts();

  return (
    <>
     <div 
        className="hamburger-btn"
        onClick={() => setToggleSideBar(prev => !prev)}>
          {toggleSideBar ? <i class="fa fa-times fa-2x"></i> : <i class="fa fa-bars fa-2x"></i>}
          
          </div>
    <div className={`side-content side-container-mobile ${toggleSideBar ? "show" : ""}`}>
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
    </>
  );
}

export default Filter;
