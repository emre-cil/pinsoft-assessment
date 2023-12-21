import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cart.find((x: any) => x.id === item.id);

      if (existItem) {
        state.cart = state.cart.map((x: any) =>
          x.id === existItem.id
            ? {
                ...x,
                count: x.count + 1,
              }
            : x,
        );
      } else {
        state.cart.push({
          ...item,
          count: 1,
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    reduceFromCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cart.find((x: any) => x.id === item.id);
      if (existItem) {
        if (existItem.count === 1) {
          state.cart = state.cart.filter((x: any) => x.id !== existItem.id);
        } else {
          state.cart = state.cart.map((x: any) =>
            x.id === existItem.id
              ? {
                  ...x,
                  count: x.count - 1,
                }
              : x,
          );
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const item = action.payload;
      state.cart = state.cart.filter((x: any) => x.id !== item.id);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, reduceFromCart, removeFromCart } = userSlice.actions;

export default userSlice.reducer;
