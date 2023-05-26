import { configureStore, createSlice } from '@reduxjs/toolkit';
import StoreData from '../components/StoreData';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    subtotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const product = StoreData.find(item => item.id === id);
      if (product) {
        const item = state.items.find(item => item.id === id);
        if (item) {
          item.quantity += quantity;
        } else {
          state.items.push({ ...product, quantity });
        }
        state.subtotal += product.price * quantity;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
