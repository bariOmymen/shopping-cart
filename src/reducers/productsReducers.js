import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_PRICE, FILTER_PRODUCTS_BY_SIZE } from "../types";

export const productsReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS: 
        console.log(action.payLoad);
        return ({items : action.payLoad, filteredItems : action.payLoad})

        case FILTER_PRODUCTS_BY_SIZE:
            return (
                {
                    //...state,
                    size : action.payLoad.size,
                    filteredItems : action.payLoad.items,
                    items : action.payLoad.allItems
                }
            )
            case FILTER_PRODUCTS_BY_PRICE: 
            return ({
                //...state,
                sort : action.payLoad.sort,
                filteredItems : action.payLoad.items
            })
    default: 
    return state
    }
}