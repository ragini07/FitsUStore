import { createContext, useContext, useReducer, useState } from "react";
import {userReducerFtn} from '../Reducer/userReducer'
const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userData , dispatchUserData]  = useReducer(userReducerFtn , {
      cart : [],
      wishlist : []
  })
  return (
    <UserContext.Provider
      value={{userData , dispatchUserData} }
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
}

