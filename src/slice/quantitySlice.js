import { createSlice } from '@reduxjs/toolkit';

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState: {
    value: 1,
    productData:[]
  },
  reducers: {
    addToCart:(state,action)=>{
      state.productData.push({ ...action.payload, quantity: 1 });
    },
    plus:(state,action)=>{
      const item = state.productData.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    minus:(state,action)=>{
      const item = state.productData.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
    remove: (state, action) => {
      state.productData = state.productData.filter((item) => item.id !== action.payload);
    },
  },
});

export const { plus,minus,addToCart,remove } = quantitySlice.actions;

export default quantitySlice.reducer;
