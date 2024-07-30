import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cart: 0,
      cartList: [],
      addToCart: (item) =>
        set((state) => {
          const updatedCartList = [...state.cartList];
          const existingItemIndex = updatedCartList.findIndex(
            (i) => i.id === item.id
          );

          if (existingItemIndex !== -1) {
            const updatedItem = {
              ...updatedCartList[existingItemIndex],
              quantity: updatedCartList[existingItemIndex].quantity + 1,
            };
            updatedCartList[existingItemIndex] = updatedItem;
          } else {
            const newItem = { ...item, quantity: 1 };
            updatedCartList.push(newItem);
          }

          return {
            cart: state.cart + 1,
            cartList: updatedCartList,
          };
        }),
      removeFromCart: (item) =>
        set((state) => {
          const updatedCartList = [...state.cartList];
          const existingItemIndex = updatedCartList.findIndex(
            (i) => i.id === item.id
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
            cart: state.cart - 1,
            cartList: updatedCartList,
          };
        }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;
