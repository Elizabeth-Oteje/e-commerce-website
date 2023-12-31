import { ShoppingBag, ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link }  from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'>Shop</Link>
            <Link to='/cart'>
                <ShoppingCart size={32}/>
                </Link>
      </div>
    </div>
  )
}


