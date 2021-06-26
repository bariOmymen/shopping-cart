
import { connect } from 'react-redux';
import {filterProductsByPrice} from '../actions/productsActions'
import {filterProductsBySize} from '../actions/productsActions'
const Filter = ({count, sort ,products,size, filteredProducts, filterProductsBySize, filterProductsByPrice}) => {
   
    /*const handleSizeChange = (e) => {
        setSize(e.target.value)
        products.filter(product => product.availableSizes.indexOf(e.target.value)>=0);
    console.log(e.target.value)
      }*/
      console.log(products)
    return (
        <div className='filter'>
            {!filteredProducts ? <div>loading...</div> : <div>Products {filteredProducts.length}</div> }

           
            <div className='filter-size'>Size <select value={size} onChange={(e) => filterProductsBySize( products, e.target.value)}>
                <option value=''>All</option>
                <option value='XS'>xs</option>
                <option value='S'>s</option>
                <option value='M'>m</option>
                <option value='L'>l</option>
                <option value='Xl'>xl</option>
                </select></div>
            <div className='filter-size'>Filter <select  value={sort} onChange={(e) => filterProductsByPrice(filteredProducts, e.target.value)}>

                <option value=''>latest</option>
                <option value='lowest'>lowest</option>
                <option value='highest'>highest</option>
            </select>
            
             </div>
        </div>
    )
}

export default  connect((state) => ({
    products: state.products.items,
    size : state.products.size,
    sort : state.products.sort,
    filteredProducts : state.products.filteredItems,
}),{filterProductsByPrice,filterProductsBySize}) (Filter)
