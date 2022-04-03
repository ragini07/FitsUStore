import './Products.css'
import { useProducts } from '../../Context/products-context'
import Filter from './Filters'
import { useUser}  from '../../Context/user-context'
import axios from 'axios'
import {useEffect} from 'react'
import ProductCard from './ProductCard'
import { useState } from 'react'
import {Loader} from '../index'
import {filterByPrice,
  filterByRating,
  filterByCategory,
  filterByStock,
  filterByDelivery,
  filterByPriceRange,
  filterBySearchQuery
} from '../../Utils'



function Products() {
  
    const [isLoading,setIsLoading] = useState(false)
    const {products , setProducts , filterState , dispatchFilterState} = useProducts()
    const {userData , dispatchUserData } = useUser()
    const {cart , wishlist} = userData
    

    useEffect( () => {
     ( async () => {
        try{
          setIsLoading(prev => !prev)
          const response  = await axios.get('/api/products')
          setProducts(() => response.data.products)
          setIsLoading(prev => !prev)
        }catch(error){
          console.log(error)
        }
      })()

    },[])

    
    const {sortBy , ratingBy , priceRange ,showFastDeliveryOnly , showOutOfStock , category , searchQuery} = filterState

    const sortedData = filterByPrice(products,sortBy)
    const filteredByPriceRangeData = filterByPriceRange(sortedData , priceRange)
    const filteredByRatingData = filterByRating(filteredByPriceRangeData,ratingBy)
    const filteredByCategoryData = filterByCategory(filteredByRatingData,category)
    const filteredByStockData =  filterByStock(filteredByCategoryData,showOutOfStock)
    const filteredByDeliveryData = filterByDelivery(filteredByStockData,showFastDeliveryOnly)
    const filteredBySearchQuery = filterBySearchQuery(filteredByDeliveryData , searchQuery)
    const finalFilteredData = filteredBySearchQuery
   
  return (
    <div className="main-container">
        <Filter/>
        <div className="main-content">
       
             <div className="grid-3-col">
               {isLoading ? <Loader/> :  finalFilteredData.map( product => <ProductCard key={product._id} product={product}/>)}
               {!isLoading && finalFilteredData.length===0 && <div>No matching product found</div>} 
            </div>
        </div>
    </div>
  )
}

export {Products}