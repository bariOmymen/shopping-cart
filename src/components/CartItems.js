import React,{useState} from 'react'
import { connect } from 'react-redux';
import CartItem from './CartItem'
import Modal from 'react-modal';
import {handleRemove} from '../actions/cartActions'
import { clearOrder, createOrder } from '../actions/orderActions';

const CartItems = ({cartItems, handleRemove, createOrder,order, clearOrder}) =>  {
   
    const [show, setShow] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const items = cartItems;
    const handleSubmit = (e) => {
        var show = false;
e.preventDefault();
        const setUp = {
            name : name,
            email : email,
            address : address,
            total: items.reduce((a,c) => a + c.price*c.count,0),
            cartItems : items
        }

        createOrder(setUp);
        show =true;
        
    }

   
    

    return (
        <div className='cart-header'>
            {items.length === 0 ? <div className='header'>cart is empty</div> :
            <div className='header'>cart has {items.length} products</div>
            }
            {items.map((item) => <CartItem product={item} onClick={() => handleRemove(item)}/>)}
       {items.length !== 0 && <div className='total-items'>
            <div className='total-price'>
               total: ${items.reduce((a,c) => a + (c.price*c.count),0)}
            </div>  
            <button className="proceed-btn" onClick={() =>{ setShow(!show)
            }}>
             Proceed to checkout
            </button>
        </div>} 

        { show  &&  <form className='add-form' onSubmit={(e) => handleSubmit(e)} >
            <div className='form-control'>
                <label>Name</label>
                <input value={name}   type='text' placeholder='Add Task' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input value={email}  type='email' placeholder='ggg@email.com' onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div className='form-control'>
                <label>address</label>
                <input type='address' value={address} onChange={(e)=> {setAddress(e.target.value)}}   />
            </div>
            <input className="btn btn-block" type='submit' value='Save' />
        </form>}

        {order && <Modal isOpen={true}>
                <button onClick={() => clearOrder()}>
                    X
                </button>
               <div className='modal-details'>
                <h3>{order._id}</h3>
                <h3>{order.name}</h3>
                <h3>{order.email}</h3>
                <h3>{order.total}</h3>

               </div>
                </Modal>}

        </div>
    )
}

export default connect((state)=> ({cartItems : state.cart.cartItems, order : state.orders.order}),{clearOrder,handleRemove, createOrder})(CartItems)
 