import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart, removeAll, removeOne } from '../../store/features/shoppingCart/shoppingCartSlice'

const CartProduct = ({ item }) => {

  const dispatch = useDispatch()

  const add = () => {
    dispatch(addToCart(item.product))
  }
  const remove = () => {
    dispatch(removeOne(item.product.id))
  }
  const del = () => {
    // bekräfta
    // if(confirm('are you sure?')) {
      dispatch(removeAll(item.product.id))
}

  return (
    <div className='d-flex justify-content-between align-items-center p-2 gap-3'>
      <div className='d-flex align-items-center'>
        <img src={item.product.imageURL} alt={item.product.name} className='img-fluid cart-image' />
        <div>
          <p className="m-0">{item.product.name}</p>
          <small>{item.quantity} x {item.product.price}</small>
        </div>
      </div>


      <div className='buttons d-flex gap-1'>
        <div className="btn-group btn-group-sm" role='group'>
          <button className='btn btn-sm btn-dark' onClick={remove}>-</button>
          <button className='btn btn-sm btn-dark' onClick={add}>+</button>
        </div>
        <button className='btn btn-sm btn-danger' onClick={del} ><FaTrash /></button>
      </div>
    </div>
  )
}

export default CartProduct