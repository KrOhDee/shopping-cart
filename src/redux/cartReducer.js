import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const initialState = {
  cart: 0,
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const updatedCartList = [...state.cartList];
      const existingItemIndex = updatedCartList.findIndex(
        (i) => i.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItem = {
          ...updatedCartList[existingItemIndex],
          quantity: updatedCartList[existingItemIndex].quantity + 1,
        };
        updatedCartList[existingItemIndex] = updatedItem;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        updatedCartList.push(newItem);
      }

      return {
        ...state,
        cart: state.cart + 1,
        cartList: updatedCartList,
      };
    }
    case REMOVE_FROM_CART: {
      const updatedCartList = [...state.cartList];
      const existingItemIndex = updatedCartList.findIndex(
        (i) => i.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItem = { ...updatedCartList[existingItemIndex] };
        updatedCartItem.quantity -= 1;

        if (updatedCartItem.quantity === 0) {
          updatedCartList.splice(existingItemIndex, 1);
        } else {
          updatedCartList[existingItemIndex] = updatedCartItem;
        }
      }

      return {
        ...state,
        cart: state.cart - 1,
        cartList: updatedCartList,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
