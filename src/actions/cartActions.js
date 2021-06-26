import { ADD_TO_CARTITEMS, REMOVE_FROM_CARTITEMS } from "../types"

export const handleAdd = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
   
    let alreadyExist = false;
    cartItems.forEach(element => {
        if(element._id === product._id){
            alreadyExist = true;
            element.count++
        }   
    });
    if(!alreadyExist){
        cartItems.push({...product, count : 1})
    }
dispatch ({
type : ADD_TO_CARTITEMS,
payLoad : {cartItems}
});
localStorage.setItem('cartItems', JSON.stringify(cartItems));

}

export const handleRemove = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice().filter((x) => x._id !== product._id);
    dispatch({
        type: REMOVE_FROM_CARTITEMS,
        payLoad : {cartItems}
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}