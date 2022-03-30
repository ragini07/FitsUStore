import { createContext, useContext, useReducer, useState } from "react";
import {userReducerFtn} from '../Reducer/userReducer'
import {initialUserDataState} from '../Utils/data'
const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userData , dispatchUserData]  = useReducer(userReducerFtn , initialUserDataState)

  
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

