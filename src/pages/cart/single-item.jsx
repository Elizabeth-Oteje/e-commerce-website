import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products'
import './cart.css'
import { Item } from './item';
import { useParams,useNavigate, Link} from 'react-router-dom';


export const SingleItem = () => {
  // const {id, productName, price, productImage,info} = props.data;
   
  //   const {addToCart, removeFromCart} = useContext(ShopContext);
  //   const navigate = useNavigate()

  return (
    <div className='cart'>
      <h1>Item Description</h1>
      <Item product={PRODUCTS}/>
      {/* <div className='cartItem'>
        {PRODUCTS.map((product)=> (
          <div>
          <img src={productImage}/>
          <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <p>{info}</p>
          </div>
          </div>

        ))}
      </div> */}
    </div>
    
  )
}

