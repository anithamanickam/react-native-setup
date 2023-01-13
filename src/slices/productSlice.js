import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  cartItems: [],
  isLoading: false,
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    return axios.get('https://dummyjson.com/products').then(res => res.data);
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.title !== action.payload.title,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action.payload.products);
      state.isLoading = false;
      state.products = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
