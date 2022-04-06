import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import {
  getCartFromServer,
  getWishlistFromServer,
} from "../Service/userAction";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const authToken = JSON.parse(localStorage.getItem("authToken"));
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [token, setToken] = useState(authToken?.token);
  const [user, setUser] = useState(userData?.user);

  if (token) {
    // getWishlistFromServer(token)
    // getCartFromServer(token)
  }

  const loginUser = async (email, password) => {
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      if (status === 200) {
        localStorage?.setItem(
          "userData",
          JSON.stringify({
            user: data.foundUser,
          })
        );
        localStorage?.setItem(
          "authToken",
          JSON.stringify({
            token: data.encodedToken,
          })
        );
        setToken(data.encodedToken);
        setUser(data.foundUser);
      }
    } catch (error) {
      console.log("error in login ", error);
    }
  };
  const signUpUser = async ({ firstName, lastName, email, password }) => {
    try {
      const { data, status } = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      if (status === 201) {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            user: data.createdUser,
          })
        );
        localStorage.setItem(
          "authToken",
          JSON.stringify({
            token: data.encodedToken,
          })
        );
        setToken(data.encodedToken);
        setUser(data.createdUser);
      }
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    setToken("");
    setUser("");
  };
  return (
    <authContext.Provider
      value={{ loginUser, logOutUser, signUpUser, token, user }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
