import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {  toast } from 'react-toastify';
import { Loader } from "../index";
import { useProducts } from "../../Context/products-context";
import { useAuth } from "../../Context/auth-context";
import { useUser } from "../../Context/user-context";
import {
  isAlreadyInCart,
  addToCart,
  isAlreadyInWishList,
  addToWishList,
  removeFromWishList,
} from "../../Service/userAction";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();
  const { id } = useParams();
  const { userData, dispatchUserData } = useUser();
  const navigate = useNavigate();
  const { cart, wishlist } = userData;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data.product);
        setIsLoading(false);
      } catch (error) {
        console.log("its error" + error);
      }
    })();
  }, []);
  const addToCartHandler = (product) => {
    token ? addToCart(dispatchUserData, token, product ,toast) : navigate("/login");
  };
  const wishlistHandler = (product) => {
    token
      ? addToWishList(dispatchUserData, token, product ,toast)
      : navigate("/login");
  };
  return (
    <>
      {isLoading && <Loader />}
      <div class="product-container">
        <img
          src={product.imageURL}
          alt="product preview"
          class="res-img-large"
        />
        <div class="product-detail-container">
          <h2>{product.desc}</h2>
          <p class="brand">{product.name}</p>
          <span class="rating-badge-number">
            {product.rating}
            <i class="fa fa-star filled-star"></i>
          </span>
          <div class="price">
            <div class="sale-price">{`₹${product.salePrice}`}</div>
            <div class="mrp-price">{`₹${product.price}`}</div>
            <div class="discount">{`(${Math.trunc(
              ((product.price - product.salePrice) / product.price) * 100
            )}% OFF)`}</div>
          </div>
          <div class="divider"></div>
          <div class="extra-detail">
            <p>
              <i class="fa fa-check-square"></i>
              {product.inStock ? "Item in Stock" : "Item Out Of Stock"}
            </p>
            <p>
              <i class="fa fa-check-square"></i>Price is inclusive of all taxes
            </p>
          </div>
          <div class="cta-btn">
            {isAlreadyInCart(cart, product) ? (
              <Link to="/cart">
                {" "}
                <button class="btn">Go To Cart</button>{" "}
              </Link>
            ) : (
              <button
                onClick={() => addToCartHandler(product)}
                className="btn"
                disabled={!product.inStock}
              >
                {product.inStock ? "Add To Cart" : "Out Of Stock"}
              </button>
            )}
            {isAlreadyInWishList(wishlist, product) ? (
              <Link to="/wishlist">
                {" "}
                <button class="btn secondary">Go To WishList</button>{" "}
              </Link>
            ) : (
              <button
                onClick={() => wishlistHandler(product)}
                className="btn secondary"
              >
                Add To Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductDetail };
