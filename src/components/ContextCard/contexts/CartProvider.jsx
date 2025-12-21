import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAuth } from "../../AuthContext";
import Swal from "sweetalert2";
const initialCart = JSON.parse(localStorage.getItem("cart") || "[]").filter(
  Boolean
);
const initialLikedItems = JSON.parse(
  localStorage.getItem("likedItems") || "[]"
).filter(Boolean);

const initialState = {
  cart: initialCart,
  likedItems: initialLikedItems,
};

const ADD_TO_CART = "ADD_TO_CART";
const ADD_TO_LIKED = "ADD_TO_LIKED";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      if (!action.user) return state;
      const existingIndex = state.cart.findIndex(
        (item) => item && item.id === action.payload.id
      );

      // If item exists
      if (existingIndex !== -1) {
        // REMOVE item if remove === true
        if (action.payload.isInCart) {
          return {
            ...state,
            cart: state.cart.filter((_, i) => i !== existingIndex),
          };
        }

        // Otherwise INCREASE qty
        return {
          ...state,
          cart: state.cart.map((item, i) =>
            i === existingIndex
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      }

      // Item does not exist → ADD NEW

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case INCREASE_QUANTITY: {
      const index = state.cart.findIndex(
        (item) => item && item.id === action.payload.id
      );

      if (index === -1) {
        if (action.user) {
          
          Swal.fire({
            icon: "info",
            timer: 1700,
            text: "Please press Add To Cart button first",
            showCancelButton: false,
            showConfirmButton: false,
            title: "Notice",
          });
        } else {
        
          Swal.fire({
            icon: "warning",
            timer: 1700,

            showCancelButton: false,
            showConfirmButton: false,
            title: "Please Log In  first",
          });
        }
        return state;
      }

      return {
        ...state,
        cart: state.cart.map((item, i) =>
          i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        ),
      };
    }

    case DECREASE_QUANTITY: {
      const index = state.cart.findIndex(
        (item) => item && item.id === action.payload.id
      );

      if (index === -1) {
        Swal.fire({
          icon: "info",
          timer: 1700,
          title: "This item not found in cart",
          showCancelButton: false,
          showConfirmButton: false,
        });

        return state;
      }
      // If quantity is 1, optionally remove item from cart
      if ((state.cart[index].quantity || 1) <= 1) {
        Swal.fire({
          icon: "info",
          timer: 1700,
          title: "Removed From Cart",
          showCancelButton: false,
          showConfirmButton: false,
        });
        return {
          ...state,
          cart: state.cart.filter((_, i) => i !== index),
        };
      }

      return {
        ...state,
        cart: state.cart.map((item, i) =>
          i === index ? { ...item, quantity: (item.quantity || 1) - 1 } : item
        ),
      };
    }

    case ADD_TO_LIKED: {
      if (!action.user) return state;
      const index = state.likedItems.findIndex(
        (item) => item && item.id === action.payload.id
      );

      // If exists → REMOVE (toggle behavior)
      if (index !== -1) {
        return {
          ...state,
          likedItems: state.likedItems.filter((_, i) => i !== index),
        };
      }

      // If NOT exists → ADD

      return {
        ...state,
        likedItems: [...state.likedItems, action.payload],
      };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [sugest, setSugest] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
  }, [state.cart, state.likedItems]);

  const addToCart = (item, isInCart) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...item, isInCart },
      user: currentUser,
    });
  };

  const addToLikedItems = (item) => {
    dispatch({ type: ADD_TO_LIKED, payload: item, user: currentUser });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: INCREASE_QUANTITY, payload: item, user: currentUser });
  };
  const decreaseQuantity = (item) => {
    dispatch({ type: DECREASE_QUANTITY, payload: item, user: currentUser });
  };
  const suggestFun = (suggest) => {
    setSugest(suggest);
  };
  return (
    <CartContext.Provider
      value={{
        state,
        sugest,
        decreaseQuantity,
        addToCart,
        suggestFun,
        addToLikedItems,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
