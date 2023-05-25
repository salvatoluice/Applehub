import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import FeaturedData from './FeaturedData'


const FeaturedProduct = (props) => {
  
  const { grid } = props;
  // console.log(grid);
  let location = useLocation();

  return (
    <>
    {FeaturedData.map((value, index) => {
        return (
            <>
                <div
                    style={{
                        // border: '1px solid gray', 
                        // marginRight: '1rem', 
                        borderRadius: '8px'
                    }}
                    key={value.id}
                    className={` ${
                    location.pathname == "/product" ? `gr-${grid}` : "col-3"
                    } `}
                >
                    <Link
                    to={`${
                        location.pathname == "/"
                        ? `/product/${value.id}`
                        : location.pathname == `/product/${value.id}`
                        ? `/product/${value.id}`
                        : `${value.id}`
                    }`}
                    className="product-card position-relative"
                    >
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                        <img style={{width: '100%'}} src={value.imgUrl} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                    </div>
                    <div className="product-details">
                        <h6 className="brand">{value.brand}</h6>
                        <h5 className="product-title">
                        {value.title}
                        </h5>
                        <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        {value.description}
                        </p>
                        <p className="price">Ksh. {value.price}</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                        </button>
                        <button className="border-0 bg-transparent">
                            <img src={view} alt="view" />
                        </button>
                        <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                        </button>
                        </div>
                    </div>
                    </Link>
                </div>
            </>
        )
    })}
    </>
  );
};

export default FeaturedProduct;
