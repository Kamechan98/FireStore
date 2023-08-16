import React from 'react'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const { cart } = useSelector(state => state.shoppingCart)
  // const { user } = useSelector(state => state.auth)


  const placeOrder = () => {
    const order = cart.map(item => {
      return { id: item.product.id, quantity: item.quantity }
    })
    
  }

  return (
    <div className='mt-5'>
      <h1 className='mb-5'>Complete your purchase</h1>
      <ShoppingCart checkout={true} />

      <h2>Confirm your shipping address</h2>
      <button className='btn btn-success'>Place Order</button>
    </div>
  )
}

export default Checkout