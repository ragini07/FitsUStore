import { useState, useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../Context/products-context";
import axios from "axios";
function Home() {
  const [homeCategory, setHomeCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatchFilterState } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading((prev) => !prev);
        const { data } = await axios.get("/api/categories");
        setHomeCategory(data.categories);
        setIsLoading((prev) => !prev);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <header className="showcase">
        <h1>Big Savings on your daily comfort</h1>
        <button class="btn">
          <Link to="/products" className="link-btn">
            {" "}
            Shop Now <i class="fa fa-chevron-right"></i>
          </Link>
        </button>
      </header>

      <h2 class="title">Featured Categories</h2>

      <section class="home-cards grid-4-col">
        {homeCategory.map(({ _id, imageURL, categoryName }) => {
          return (
            <div
              class="home-card"
              key={_id}
              onClick={() => {
                dispatchFilterState({
                  type: "BY_CATEGORY",
                  payload: categoryName,
                });
                navigate("/products");
              }}
            >
              <img src={imageURL} alt="" />
              <h1 class="overlay">{categoryName}</h1>
            </div>
          );
        })}
      </section>
    </>
  );
}

export { Home };
