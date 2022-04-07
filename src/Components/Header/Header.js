import "./Header.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link, useLocation , NavLink} from "react-router-dom";
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

  const activeLink = ({isActive}) => isActive ? "active-link" : ""
  return (
    <>
      <nav className="main-nav">
       <Link to="/"><img src={logo} alt="Brand Logo" /></Link> 
        <ul className="main-menu">
          <li>
            {" "}
            <NavLink className={activeLink} to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink className={activeLink} to="/products">Products</NavLink>
          </li>
        </ul>
        <ul className="right-menu">
          <li className="list-link" onClick={() => setShowSearch(true)}>
            <i className="fa fa-search"></i>
          </li>
          <li className="list-link">
            <div className="badge-container"
              onClick={() =>
                token ? navigate("/wishlist") : navigate("/login")
              }
            >
              <i className="fa fa-heart"></i>
              {token && <span className="number sm-num">{wishlist.length}</span>}
            </div>
          </li>
          <li className="list-link">
            <div className="badge-container"
              onClick={() => (token ? navigate("/cart") : navigate("/login"))}
            >
              <i className="fa fa-shopping-cart"></i>
           
              {token && <span className="number sm-num">{cart.length}</span>}
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
          <label className="search-conatiner">
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
              className="fa fa-times fa-2x"
            ></i>
          </label>
        </div>
      )}
    </>
  );
}

export { Header };
