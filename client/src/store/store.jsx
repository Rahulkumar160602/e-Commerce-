import { createContext, useContext, useReducer } from "react";

const Store = createContext();

const getUserCart = (user) => {
  if (!user) return [];
  const saved = localStorage.getItem(`cart_${user.email}`);
  return saved ? JSON.parse(saved) : [];
};

const getUserWishlist = (user) => {
  if (!user) return [];
  const saved = localStorage.getItem(`wishlist_${user.email}`);
  return saved ? JSON.parse(saved) : [];
};

const initialUser = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: initialUser,
  cart: getUserCart(initialUser),
  wishlist: getUserWishlist(initialUser),
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        cart: getUserCart(action.payload),
        wishlist: getUserWishlist(action.payload),
      };

    case "LOGOUT":
      localStorage.removeItem("user");
      return { ...state, user: null, cart: [], wishlist: [] };

    case "ADD_TO_CART":
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem(`cart_${state.user.email}`, JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter((p) => p._id !== action.payload);
      localStorage.setItem(`cart_${state.user.email}`, JSON.stringify(filteredCart));
      return { ...state, cart: filteredCart };

    case "ADD_TO_WISHLIST":
      const updatedWishlist = [...state.wishlist, action.payload];
      localStorage.setItem(`wishlist_${state.user.email}`, JSON.stringify(updatedWishlist));
      return { ...state, wishlist: updatedWishlist };

    case "REMOVE_FROM_WISHLIST":
      const filteredWishlist = state.wishlist.filter((p) => p._id !== action.payload);
      localStorage.setItem(`wishlist_${state.user.email}`, JSON.stringify(filteredWishlist));
      return { ...state, wishlist: filteredWishlist };

    default:
      return state;
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export const useStore = () => useContext(Store);
