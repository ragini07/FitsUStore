import { useState, useEffect } from "react";
import "../Cart/Cart.css";
import { useUser } from "../../Context/user-context";
import { useNavigate } from "react-router-dom";
import { Popper } from "../../Utils";

function OrderSummary() {
  const { setUserTab } = useUser();
  const navigate = useNavigate();
  const { userData, dispatchUserData } = useUser();
  const { orders } = userData;

  return (
    <>
      {orders.length > 0 ? (
        <>
          <Popper />
          <div className="center-container">
            <h2 className="center">Order successfully placed !! 🎊</h2>
            <h5>Thankyou for shopping with us !</h5>
            <button
              className="btn"
              onClick={() => {
                setUserTab("Orders");
                navigate("/profile");
              }}
            >
              View Order
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="center-container">
            <h2 className="center">Looks like you haven't shopped yet.</h2>

            <button className="btn" onClick={() => navigate("/")}>
              Shop Now
            </button>
          </div>
        </>
      )}
    </>
  );
}

export { OrderSummary };
