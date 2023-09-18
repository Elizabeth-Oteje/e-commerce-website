import React from 'react'
import { Details } from './details'

export const Item = ({props}) => {
    const {id, productName, price, productImage,info} = props.product;
  return (
    <div className='cartItem'>
        <img src={productImage}/>
          <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <p>{info}</p>
          </div>
    </div>
  )
}


