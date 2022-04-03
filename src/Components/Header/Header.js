import "./Header.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../Context/user-context";
import { useAuth } from "../../Context/auth-context";
import { useState, useEffect } from "react";
import { useProducts } from "../../Context/products-context";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const { filterState, dispatchFilterState } = useProducts();
  const { searchQuery } = filterState;
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = useUser();
  const { token } = useAuth();
  const { cart, wishlist } = userData;

  const searchHandler = (e) => {
    if(location.pathname !== '/products')
        navigate("/products");
    else
         dispatchFilterState({ type: "FILTER_BY_SEARCH", payload: e.target.value });
  };

  useEffect(() => {
    dispatchFilterState({ type: "FILTER_BY_SEARCH", payload: "" });
  }, [navigate]);

  return (
    <>
      <nav className="main-nav">
        <img src={logo} alt="Brand Logo" />
        <ul className="main-menu">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <ul className="right-menu">
          <li className="list-link" onClick={() => setShowSearch(true)}>
            <i className="fa fa-search"></i>
          </li>
          <li className="list-link">
            <div
              onClick={() =>
                token ? navigate("/wishlist") : navigate("/login")
              }
            >
              <i className="fa fa-heart"></i>
              {token && <span>{wishlist.length}</span>}
            </div>
          </li>
          <li className="list-link">
            <div
              onClick={() => (token ? navigate("/cart") : navigate("/login"))}
            >
              <i className="fa fa-shopping-cart"></i>
              {token && <span>{cart.length}</span>}
            </div>
          </li>

          <li className="list-link">
            <div
              onClick={() =>
                token ? navigate("/profile") : navigate("/login")
              }
            >
              <i className="fa fa-user"></i>
            </div>
          </li>
        </ul>
      </nav>

      {showSearch && (
        <div className="searchbar">
          <label for="">
            <input
              value={searchQuery}
              onChange={searchHandler}
              className="searchbar-input search"
              type="text"
              placeholder="type to search"
            />
            <i
              onClick={() => {
                setShowSearch(false);
                dispatchFilterState({ type: "FILTER_BY_SEARCH", payload: "" });
              }}
              className="fa fa-times"
            ></i>
          </label>
        </div>
      )}
    </>
  );
}

export { Header };
