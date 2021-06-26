import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_PRICE, FILTER_PRODUCTS_BY_SIZE } from "../types";

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch('/api/products');
   const data = await res.json(); 
    dispatch({
        type : FETCH_PRODUCTS,
        payLoad : data
    });
};

export const filterProductsBySize = (products, size) => (dispatch) => {
dispatch({
    type : FILTER_PRODUCTS_BY_SIZE,
    payLoad :{ 
        size: size,
   
    items :
    size === "" ? products :
     products.filter(product => product.availableSizes.indexOf(size)>=0),

     allItems : products
    }
})
console.log(products, size,"filtered")
}

export const filterProductsByPrice = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if(sort === "" ) {
        sortedProducts.sort((a,b)=> a._id > b._id ? 1 : -1);
    } else{
        sort === "highest" ?
        sortedProducts.sort((a,b)=> a.price < b.price ? 1 : -1 ) :
        sortedProducts.sort((a,b) => a.price > b.price ? 1 : -1)
    }
    dispatch({
         type: FILTER_PRODUCTS_BY_PRICE,
         payLoad : {
             sort : sort,
             items : sortedProducts
         }

     })
}