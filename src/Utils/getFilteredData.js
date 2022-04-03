
export const filterByPrice = (products,sortBy) =>{

        if(sortBy && sortBy === "Low_To_High")
            return [...products].sort((a, b) => a["salePrice"] - b["salePrice"])
        if(sortBy && sortBy === "High_To_Low")
            return [...products].sort((a, b) => b["salePrice"] - a["salePrice"])
        return products
      
    }
export const filterByPriceRange = (sortedData , priceRange) => {
    return sortedData.filter(item => item["salePrice"] <= priceRange)
}
export const filterByRating = (filteredByPriceRangeData,ratingBy) =>{
   
     if(ratingBy)
        return filteredByPriceRangeData.filter(el => el["rating"] >= ratingBy)
    return filteredByPriceRangeData        
}
export const filterByCategory = (filteredByRatingData , category) => {
         let categorySelected = []
        for(let c in category){
            if(category[c])
                categorySelected = [...categorySelected,c]
        }   
        if(categorySelected.length > 0)
            return filteredByRatingData.filter(item => categorySelected.some(c => c === item.category))
        return filteredByRatingData
}
export const filterByStock = (filteredByCategoryData,showOutOfStock) =>{
    if(showOutOfStock)
        return filteredByCategoryData
    return filteredByCategoryData.filter(item => item["inStock"])
}
export const filterByDelivery = (filteredByStockData,showFastDeliveryOnly) => {
    if(showFastDeliveryOnly)
        return filteredByStockData.filter(item => item["fastDelivery"])
    return filteredByStockData
}

export const filterBySearchQuery = (filteredByDeliveryData , searchQuery) => {
    if(searchQuery)
        return filteredByDeliveryData.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return filteredByDeliveryData
}