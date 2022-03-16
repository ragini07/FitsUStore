export const filterReducerFtn = (state,action) => {
    switch(action.type) {
        case "SORT_BY_PRICE" :
            return {...state , sortBy : action.payload}
        case "PRICE_RANGE" :
            return {...state , priceRange : action.payload}
        case "RATE_BY_STAR" :{
            console.log(state.ratingBy)
            return {...state ,ratingBy : action.payload}
        }
           
        case "SHOW_OUT_OF_STOCK" :
            return {...state , showOutOfStock : !state.showOutOfStock}
        case "SHOW_FAST_DELIVERY" :
            return {...state , showFastDeliveryOnly : !state.showFastDeliveryOnly}
        case "BY_CATEGORY" : {
            if(action.payload === 'Lighting')
                state = {...state , category : {...state.category , Lighting :  !state.category.Lighting}}
            if(action.payload === 'Beds') 
                state = {...state , category : {...state.category , Beds :  !state.category.Beds}}     
            if(action.payload === 'Decor')
                state = {...state , category : {...state.category , Decor :  !state.category.Decor}}
            if(action.payload === 'Sofas')
                state = {...state , category : {...state.category , Sofas :  !state.category.Sofas}}
            return state
        }    
        case "CLEAR_FILTER" : 
            return { sortBy : "" ,
                ratingBy : 0 , 
                priceRange : 10000,
                showFastDeliveryOnly : false ,
                showOutOfStock : false,
                category : {Beds : false , Lighting : false ,Decor : false , Sofas: false}}
        default :
            return state
    }
}