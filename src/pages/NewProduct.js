import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const NewProduct = () => {
  return (
    <>
      <Meta title={"New Product"} />
      <BreadCrumb title="New Product" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Add New Product</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="title" placeholder="Tittle" />
                <CustomInput type="number" name="price" placeholder="Price" />
                <CustomInput type="text" name="imgUrl" placeholder="Image 1" />
                <CustomInput type="text" name="imgUrl1" placeholder="Image 2" />
                <CustomInput type="text" name="imgUrl2" placeholder="Image 3" />
                <CustomInput type="text" name="imgUrl3" placeholder="Image 4" />
                <CustomInput type="text" name="type" placeholder="Type" />
                <CustomInput type="text" name="brand" placeholder="Brand" />
                <CustomInput type="text" name="category" placeholder="Category" />
                <CustomInput type="text" name="description" placeholder="Description" />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Add</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewProduct;
