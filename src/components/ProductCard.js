import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import StoreData from "./StoreData";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/store'


const ProductCard = (props, { productItems }) => {
  // const dispatch = useDispatch();

  // const handleAddToCart = () => {
  //   dispatch(addToCart({ id: product.id, quantity: 1 }));
  //   console.log(product.id, "added!")
  // };
  
  const { grid } = props;
  // console.log(grid);
  let location = useLocation();

  return (
    <>
    {StoreData.map((value) => {
      return (
        <div
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
              <img src={value.imgUrl} style={{width: '80%'}} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            {/* <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" /> */}
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
              <button
              //  onClick={handleAddToCart}
               className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      )
    })}
    </>
  );
};

export default ProductCard;
