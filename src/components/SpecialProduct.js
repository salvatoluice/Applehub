import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import SpecialData from "./SpecialData";
const SpecialProduct = () => {
  return (
    <>
    {SpecialData.map((value) => {
      return (
        <div key={value.id} className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img style={{width: '300px'}} src={value.imgUrl} className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{value.brand}</h5>
              <h6 className="title">
                {value.title}
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">Ksh. {value.price}</span> &nbsp; <strike>Ksh. {value.initial}</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>{value.days} </b>days left
                </p>
              </div>
              <div className="prod-count my-3">
                <p>Products: {value.products}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
      )
    })}
    </>
  );
};

export default SpecialProduct;
