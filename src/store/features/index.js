import { configureStore } from '@reduxjs/toolkit'
import productListSlice from './products/productListSlice'
import shoppingCartSlice from './shoppingCart/shoppingCartSlice'

export const store = configureStore({
    reducer: {
        productList: productListSlice,
        shoppingCart: shoppingCartSlice
    }
})