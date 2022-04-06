import React from "react";
import NotFoundImg from "../../assets/NotFound.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="center-container">
        <img className="res-img sm-res-img" src={NotFoundImg} alt="404" />
        <h3>We couldn't find any matches!</h3>
        <div>Please check the spelling or try searching something else.</div>
        <Link to="/">
          <button className="btn">Shop Now</button>
        </Link>
      </div>
    </>
  );
}

export { NotFound };
