import { initialFilterState } from "../Utils/data"

export const filterReducerFtn = (state,action) => {
    switch(action.type) {
        case "SORT_BY_PRICE" :
            return {...state , sortBy : action.payload}
        case "PRICE_RANGE" :
            return {...state , priceRange : action.payload}
        case "RATE_BY_STAR" :
            return {...state ,ratingBy : action.payload}    
        case "SHOW_OUT_OF_STOCK" :
            return {...state , showOutOfStock : !state.showOutOfStock}
        case "SHOW_FAST_DELIVERY" :
            return {...state , showFastDeliveryOnly : !state.showFastDeliveryOnly}
        case "BY_CATEGORY" : 
            return state = {...state , category : {...state.category , [action.payload] :  !state.category[action.payload]}}
        case "FILTER_BY_SEARCH" : 
            return {...state , searchQuery :  action.payload}  
        case "CLEAR_FILTER" : 
            return initialFilterState
        default :
            return state
    }
}