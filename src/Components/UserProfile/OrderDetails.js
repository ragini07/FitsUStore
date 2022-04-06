import React from "react";
import { useUser } from "../../Context/user-context";
import "./userProfile.css";
import "../Cart/Cart.css";

function OrderDetails() {
  const { userData, dispatchUserData } = useUser();
  const { orders } = userData;

  return (
    <div id="Profile" className="tabcontent">
      {orders.length > 0 ? (
        <>
          <h3 className="center">My Orders</h3>
          {orders.map(({ products, amount }) => {
            return (
              <>
                <div className="order-container">
                  <div className="text-success">Order Confirmed</div>
                  <div className="text-lg">{`Total : ₹${amount}`}</div>
                  {products.map((item) => (
                    <div className="horizontal-card shadow-lg">
                      <img
                        className="res-img-small img-sm"
                        src={item.imageURL}
                        alt="product preview"
                      />
                      <div className="text-container">
                        <h4>{item.desc}</h4>
                        <p className="brand">{item.name}</p>
                        <div className="text-lg">{`Quantity : ${item.qty}`}</div>
                        <div className="text-lg">{`Price : ${item.salePrice}`}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          })}
        </>
      ) : (
        <div className="center text-lg">Looks like you haven't shopped yet</div>
      )}
    </div>
  );
}

export { OrderDetails };
