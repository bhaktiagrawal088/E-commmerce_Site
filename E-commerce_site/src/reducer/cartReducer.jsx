export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case "ADD_TO_WISHLIST":
      const itemExists = state.wishlist.some((item) => item.id === payload.id);
      if (!itemExists) {
        return {
          ...state,
          wishlist: [...state.wishlist, payload],
        };
      }
    case "MOVE_TO_WISHLIST": {
      // Check if the item already exists in the wishlist
      const itemExists = state.wishlist.some(
        (item) => item.id === payload.product.id
      );
      if (!itemExists) {
        return {
          ...state,
          wishlist: [...state.wishlist, payload.product],
          cart: state.cart.filter((item) => item.id !== payload.product.id),
        };
      }
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.product.id),
      };
    }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};
