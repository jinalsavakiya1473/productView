import { configureStore } from '@reduxjs/toolkit'
import selectedProductSlice from '../slice/selectedProductSlice'
import quantitySlice from '../slice/quantitySlice'

export default configureStore({
  reducer: {
    selectedProduct:selectedProductSlice,
    quantity:quantitySlice
  },
})