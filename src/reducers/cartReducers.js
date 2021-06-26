import { ADD_TO_CARTITEMS, CLEAR_CART, REMOVE_FROM_CARTITEMS } from "../types";

export const cartReducers = (state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") } ,
action) => {
switch (action.type) {
    case ADD_TO_CARTITEMS: 
    return ({
         cartItems : action.payLoad.cartItems
    })
case REMOVE_FROM_CARTITEMS:
    return({
        cartItems : action.payLoad.cartItems
    })
    case CLEAR_CART:
        console.log("clear");
        localStorage.clear("cartItems");
        return({
            cartItems: []
        })
   
    default:
    return state
}
};

