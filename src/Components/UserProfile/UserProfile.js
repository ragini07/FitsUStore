import "./userProfile.css";
import React from "react";
import { useAuth } from "../../Context/auth-context";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/user-context";
export function UserProfile() {
  const navigate = useNavigate();
  const { dispatchUserData } = useUser();
  const { logOutUser, user } = useAuth();
  const logOutHandler = () => {
    logOutUser();
    dispatchUserData({ type: "CLEAR_USER_DATA" });
    navigate("/");
  };
  return (
    <>

          <div id="Profile" className="tabcontent">
            <div className="sub-container">
              <div>Name:</div>
              <div className="desc">{`${user.firstName} ${user.lastName}`}</div>
            </div>
            <div className="sub-container">
              <div>Email:</div>
              <div className="desc">{user.email}</div>
            </div>
            <button className="btn btn-lg secondary" onClick={logOutHandler}>
              Log Out
            </button>
          </div>

    </>
  );
}
