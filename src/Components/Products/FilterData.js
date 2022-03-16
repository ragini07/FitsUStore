import React from 'react'
import { useProducts } from '../../Context/products-context'

const ratingStars = [4,3,2,1]

function FilterData() {
    const {products , setProducts,filterState , dispatchFilterState} = useProducts()
    const {sortBy , ratingBy , priceRange , showFastDeliveryOnly , showOutOfStock , category} = filterState
  
    const {Beds,Lighting,Decor,Sofas} = category
  return (
    <ul className="filter-title">
                    <li className="filter-category">PRICE</li>
                    <input className="range-input" type="range" id="rangeInput" name="rangeInput"
	                    min="100" max="10000" step="100" value={priceRange} onChange={(e) => dispatchFilterState({type : "PRICE_RANGE" , payload : e.target.value})}/>                                 
                    <output id="amount" name="amount" key="rangeInput">{`₹${priceRange}`}</output>
                    <div className="options">
                        <label key="price-1">
                            <input 
                                onChange = {() => dispatchFilterState({type : "SORT_BY_PRICE" , payload : "Low_To_High"})}
                                checked={sortBy && sortBy === "Low_To_High"}
                                type="radio" name="price" id="price-1"/>Low to High
                        </label>
                        <label key="price-2">
                            <input 
                                onChange = {() => dispatchFilterState({type : "SORT_BY_PRICE" , payload : "High_To_Low"})}
                                checked={sortBy && sortBy === "High_To_Low"}
                                type="radio" name="price" id="price-2"/>High to Low
                        </label>
                    </div>
                   
                    <li className="filter-category">CATEGORY</li>
                    <div className="options">
                        {  
                           Object.keys(category).map(categoryName => {
                               return ( <label key = {categoryName}>
                               <input 
                                   onChange = {() => dispatchFilterState({type : "BY_CATEGORY" , payload : categoryName})}
                                   checked={category[categoryName]}
                                   type="checkbox" name="category-checkbox" id={categoryName}/>{categoryName}
                           </label>)
                           })
                        }
                    </div>
                   
                    <li className="filter-category">RATING</li>

                    <div className="options">
                        {
                            ratingStars.map(star => {
                                return (
                                    <label key = {star}>
                                    <input 
                                        onChange={() => dispatchFilterState({type : "RATE_BY_STAR" , payload: star })}
                                        checked={ratingBy && ratingBy === star}
                                        type="radio" name="rate" id={star}/>{star} Star & above
                                </label >
                                )
                            })
                        }
 
                    </div>

                    <li className="filter-category">Availability</li>
                    <div className="options">
                        <label key="check-5">
                            <input 
                                 onChange={() => dispatchFilterState({type : "SHOW_OUT_OF_STOCK" })}
                                 checked={showOutOfStock}
                                type="checkbox" name="checkbox" id="check-5"/>Include Out Of Stock
                        </label>
                        <label key="check-6">
                            <input 
                                onChange={() => dispatchFilterState({type : "SHOW_FAST_DELIVERY"})}
                                checked={showFastDeliveryOnly}
                                type="checkbox" name="checkbox" id="check-6"/>Fast Delivery
                        </label>
                    </div>
                </ul>
  )
}

export default FilterData