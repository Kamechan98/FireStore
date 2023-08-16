import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addProduct } from '../store/features/products/productListSlice'

const Add = () => {

  const dispatch = useDispatch()

  const [productData, setProductData ] = useState({
    name: '',
    price: '',
    imageURL: '',
    description: ''
  })

  const handleChange = e => {
    const { id, value } = e.target 
    setProductData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      ...productData,
      price: +productData.price
    }

    dispatch(addProduct(data))
  }

  return (
    <div>
      <h1 className='text-center my-5'> Add a new product</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='form-label' htmlFor='name'>Product Name:</label>
          <input type="text" className='form-control' id="name" value={productData.name} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor='price'>Product Price:</label>
          <input type="text" inputMode='decimal' className='form-control' id="price" value={productData.price} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor='imageURL'>Image URL:</label>
          <input type="text" className='form-control' id="imageURL" value={productData.imageURL} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor='description'>Product Description:</label>
          <textarea type="text" className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange} />
        </div>
        <button className='btn btn-primary'>Add Product</button>
      </form>
    </div>
  )
}

export default Add