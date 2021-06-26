
import './App.css';
import {useEffect, useState} from 'react'

import Products from './components/Products';
import Filter from './components/Filter';
import CartItems from './components/CartItems'
import store from './store';
import {Provider} from 'react-redux';
import  { fetchProducts }  from './actions/productsActions';


function App() {
 /* const [products, setProducts] = useState([]);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');*/
  const [cartItems, setCartItems] = useState( localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) :   []);
  
  useEffect( ()  =>  {
   
    
    //console.log(fetchProducts());
    /*const getProducts = async () => {
      const products = await fetchData();
      setProducts(products);
    }*/
    console.log(fetchProducts);
  },[]);

  /*const fetchData = async () => {
    const res = await fetch('http://localhost:5000/api/products');
    const data = await res.json();
    return data;
  }*/


 /* const handleSizeChange = (e) => {
    setSize(e.target.value)
    setProducts(data.products.filter(product => product.availableSizes.indexOf(e.target.value)>=0))
console.log(e.target.value)
  }
  const handleSortChange = (e) => {
    const sort = e.target.value;
    setSort(sort);
    setProducts(products.slice().sort((a,b) => 
      sort === 'lowest'? ((a.price<b.price)? 1:-1):
      sort === 'highest'? ((a.price>b.price)? 1: -1):
      ((a._id)>b._id)? 1:-1)
    )
  };*/
 /* const handleAddClick = (product) => {
    const items = cartItems.slice(); // must add slice so the page updates
    let exist = false;
    items.forEach(element => {
      if(element._id === product._id){
        element.count++
        exist = true;
      }
    });
    if(!exist){
      items.push({...product, count: 1})
    }
    localStorage.setItem("cartItems",JSON.stringify(items))
setCartItems(items);
console.log(cartItems)
  }*/

  const handleRemoveClick = (product) => {
    const items = cartItems.slice();
    setCartItems(items.filter((item) => item._id !== product._id))
    localStorage.setItem("cartItems",JSON.stringify(items.filter((item) => item._id !== product._id)))

  }

  
  return (
    <Provider store={store}>
    <div className="grid-container">
      <header className="App-header">
       <a href='/' >Shopping Cart</a>
      </header>
      <main>
       
        <div className='container'>
          <div className='main'>
           
             <Filter />
           
           <Products />

          </div>
          <div className='side' > 
<CartItems cartItems={cartItems} handleRemoveClick={handleRemoveClick}/>


          </div>

        </div>
      </main>
      <footer>
all Right reserved
      </footer>
    </div>
    </Provider>
    
  );
  }


export default App;
