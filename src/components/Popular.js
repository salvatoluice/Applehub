import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import PopularData from "./PopularData";

const Popular = (props) => {
    // console.log(PopularData)
    const { grid } = props;
    let location = useLocation();
  return (
    <>
        {PopularData.map((value) => {
            return (
                <div
                    style={{
                        width: '300px'
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
                    <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} className="wishlist-icon position-absolute">
                        <button style={{
                            display: 'flex',
                            paddingLeft: '1rem'
                        }} className="border-0 d-flex bg-transparent">
                        <img style={{display: 'flex', width: '100%', justifyContent: 'center', textAlign: 'center'}} src={value.imgUrl} alt="wishlist" />
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
            )
        })}
    </>
  )
}

export default Popular
