import { useState } from "react";
import { useProducts } from "../../Context/products-context";
import { Coupons } from "../../Utils/data";
import "./Cart.css";

function CouponModal() {
  const { modal, setModal, coupon, setCoupon } = useProducts();
  const [input, setInput] = useState({});
  return (
    <>
      {modal && (
        <>
          <div class="modal">
            <div class="modal-body">
              <div className="modal-close">
                <h3>Apply Coupon</h3>
                <span
                  onClick={() => setModal((prev) => !prev)}
                  class="cross close-modal"
                >
                  <i class="fa fa-times"></i>
                </span>
              </div>

              <div class="modal-content">
                {Coupons.map((el) => {
                  return (
                    <>
                      <label key={el._id} className="modal-label">
                        <input
                          onChange={() => setInput(el)}
                          checked={el.title === input.title}
                          type="radio"
                          name="category-checkbox"
                          id={el._id}
                        />
                        {el.title}
                        <span className="coupon-offer">
                          - FLAT {el.value}% OFF{" "}
                        </span>
                      </label>
                    </>
                  );
                })}
                <div className="modal-cta">
                  <button
                    className="btn"
                    onClick={() => {
                      setModal((prev) => !prev);
                      setCoupon(input);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export { CouponModal };
