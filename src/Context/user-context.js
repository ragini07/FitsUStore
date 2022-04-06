import { createContext, useContext, useReducer, useState } from "react";
import { userReducerFtn } from "../Reducer/userReducer";
import { initialUserDataState } from "../Utils/data";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userTab , setUserTab] = useState("Profile")
  const [userData, dispatchUserData] = useReducer(
    userReducerFtn,
    initialUserDataState
  );

  return (
    <UserContext.Provider value={{ userData, dispatchUserData ,userTab , setUserTab }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
