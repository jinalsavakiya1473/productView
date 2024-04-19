import { createSlice } from '@reduxjs/toolkit';

export const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState: {
    productId: null,
  },
  reducers: {
    setSelectedProductId: (state, action) => {
      state.productId = action.payload;
    },
  },
});

export const { setSelectedProductId } = selectedProductSlice.actions;

export const selectProductId = (state) => state.selectedProduct.productId;

export default selectedProductSlice.reducer;
