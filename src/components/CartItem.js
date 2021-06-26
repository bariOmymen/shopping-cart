import React from 'react'

const CartItem = ({product, onClick}) => {
    return (
        <div className='cart-product' key={product._id}>
            
                <img src={product.image} alt={product.title} />
                <p>
                    {product.title}
                </p>
          
            <div className='cart-info'>
                <div>{product.price} x {product.count}</div> 
                
                <button onClick={() => onClick()}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem
