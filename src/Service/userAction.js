import axios from "axios";
import { useUser } from "../Context/user-context";

export const isAlreadyInCart = (cart, product) => {
  return cart.some((el) => el._id === product._id);
};
export const isAlreadyInWishList = (wishlist, product) => {
  return wishlist.some((el) => el._id === product._id);
};
export const getCartFromServer = async (token) => {
  const { dispatchUserData } = useUser();
  try {
    const { data, status } = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    if (status === 200)
      dispatchUserData({ type: "SET_CART", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};
export const getWishlistFromServer = async (token) => {
  const { dispatchUserData } = useUser();
  try {
    const { data, status } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    if (status === 200)
      dispatchUserData({ type: "SET_WISHLIST", payload: data.wishList });
  } catch (error) {
    console.log(error);
  }
};
export const addToCart = async (dispatchUserData, token, product) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201)
      dispatchUserData({ type: "ADD_TO_CART", payload: product });
  } catch (error) {
    console.log(error);
  }
};
export const removeFromCart = async (dispatchUserData, token, product) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/cart/${product._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      dispatchUserData({ type: "REMOVE_FROM_CART", payload: product });
    }
  } catch (error) {
    console.log(error);
  }
};

export const changeQtyInCart = async (
  dispatchUserData,
  token,
  product,
  type
) => {
  try {
    const { data, status } = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: type,
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      if (type === "increment")
        dispatchUserData({ type: "INCREMENT_QUANTITY", payload: product });
      else dispatchUserData({ type: "DECREMENT_QUANTITY", payload: product });
    }
  } catch (error) {
    console.log(error);
  }
};
export const addToWishList = async (dispatchUserData, token, product) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      console.log("in if");
      dispatchUserData({ type: "ADD_TO_WISHLIST", payload: product });
    }
  } catch (error) {
    console.log(error);
  }
};
export const removeFromWishList = async (dispatchUserData, token, product) => {
  console.log(product._id);
  try {
    const { data, status } = await axios.delete(
      `/api/user/wishlist/${product._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      dispatchUserData({ type: "REMOVE_FROM_WISHLIST", payload: product });
    }
  } catch (error) {
    console.log(error);
  }
};
