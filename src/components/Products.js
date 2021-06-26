import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import { handleAdd } from '../actions/cartActions';

const Products = ({products, fetchProducts, filteredProducts , handleAdd}) => {
    const [product, setProduct] = useState(products);
    
    
    

    useEffect(() => {
    fetchProducts();
    },[fetchProducts]);
 
    return (
        <div>
            {!filteredProducts ? <div>loading...</div> :  <ul className='products'>
                {filteredProducts.map((product) => (
                    
                    <li key={product.id}>
                        <div className='product'>
                            <a href='/' onClick={(e) =>{ 
                                e.preventDefault();
                                setProduct(product)
                               
                            } 
                                }>
                                <img src={product.image} alt={product.title} />
                                <p>
                                    {product.title}
                                </p>
                            </a>
                            <div className='product-price'>
                                <h3>${product.price}</h3>
                                <button onClick={() => {handleAdd(product)}}>
                                    add to cart
                                </button>
                            
                            </div>
                        </div>
                    </li>
                ))}
            </ul> }
           
            {product && <Modal isOpen={true}>
                <button onClick={() => setProduct(null)}>
                    X
                </button>
               <div className='modal-details'>
                   <div className='image-frame'>
                       <img src={product.image} alt={product.title} />
                   </div>
                   <div className='details'>
                       <p>
                           {product.title}
                       </p>
                       <p>
                           {product.description}
                       </p>
                       { !product ? <div>loading...</div> : <p>
                           Available sizes {product.availableSizes.map((x) => (
                               <span>{ " " }
                               <button className='button'>{x}</button>
                               </span>
                           ))}
            

                       </p>}

                       <div className='product-price'>
                           <div>
                               {product.price}
                           </div>
                           <button className='primery-button' onClick={() => {
                               handleAdd(product);
                               setProduct(null);
                           }}>
                               ADD TO Cart
                           </button>
                       </div>

                   </div>

               </div>
                </Modal>}
        </div>
    )
}

export default connect((state) => ({products: state.products.items,
filteredProducts : state.products.filteredItems,
cartItems : state.cart.cartItems,
}),{fetchProducts, handleAdd })(Products)
