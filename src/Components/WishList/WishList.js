import "./Wishlist.css";
import { useUser } from "../../Context/user-context";
import { useAuth } from "../../Context/auth-context";
import {  toast } from 'react-toastify';
import {
  isAlreadyInCart,
  addToCart,
  removeFromWishList,
} from "../../Service/userAction";
import { Link } from "react-router-dom";

function WishList() {
  const { userData, dispatchUserData } = useUser();
  const { token } = useAuth();
  const { cart, wishlist } = userData;

  const addToCartHandler = (product) => {
    token ? addToCart(dispatchUserData, token, product,toast) : navigate("/login");
  };
  const wishlistHandler = (product) => {
    removeFromWishList(dispatchUserData, token, product,toast);
  };
  return (
    <>
      {wishlist.length > 0 ? (
        <div className="wishlist-container">
          <h2 className="title-center">My WishList</h2>
          <div className="grid-res-col">
            {wishlist.map((product) => {
              return (
                <div key ={product._id} className="card-vertical">
                  <div className="image-container">
                    <img
                      className="res-img"
                      src={product.imageURL}
                      alt="product preview"
                    />
                  </div>

                  {product.isBestSeller && (
                    <span className="card-badge-left">Best Seller</span>
                  )}
                  <span
                    className="card-badge-right"
                    onClick={() => wishlistHandler(product)}
                  >
                    <i className="fa fa-trash  icon-black"></i>
                  </span>
                  <div className="text-container">
                    <div className="title-wishlist">
                      <div className="text-container-title">{product.name}</div>
                    </div>
                    <div className="text-container-desc">{product.desc}</div>
                    <span className="rating-badge-number">
                      {product.rating}
                      <i className="fa fa-star filled-star"></i>
                    </span>
                    <div className="price">
                      <div className="sale-price">{`₹${product.salePrice}`}</div>
                      <div className="mrp-price">{`₹${product.price}`}</div>
                      <div className="discount">{`(${Math.trunc(
                        ((product.price - product.salePrice) / product.price) *
                          100
                      )}% OFF)`}</div>
                    </div>
                    <div className="text-container-desc">
                      {product.fastDelivery
                        ? "Fast Delivery"
                        : "3 days minimum"}
                    </div>
                    {isAlreadyInCart(cart, product) ? (
                      <Link to="/cart">
                        {" "}
                        <button className="btn product-btn">Go To Cart</button>{" "}
                      </Link>
                    ) : (
                      <button
                        onClick={() => addToCartHandler(product)}
                        className="btn product-btn"
                        disabled={!product.inStock}
                      >
                        {product.inStock ? "Add To Cart" : "Out Of Stock"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h2 className="center cart">WishList Is Empty</h2>
      )}
    </>
  );
}

export { WishList };
