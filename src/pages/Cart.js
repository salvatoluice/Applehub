import React, { useContext } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { CartContext } from "../components/CartContex";

const Cart = () => {

  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateCartTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += calculateTotal(item.price, item.quantity);
    });
    return total;
  };

  // const { cartItem, setCartItem } = useContext(CartContext);

  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
  //   setTotalPrice(newTotalPrice);
  // }, [cartItem]);

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
      {/* {cartItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        <p>{subtotal}</p> */}
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>

            {cartItems.map((item) => (
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={item.imgUrl} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <h5 className="price">{item.title}</h5>
                  <p>Type: {item.type}</p>
                  <p>Brand: {item.brand}</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">Ksh. {item.price}</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                {item.quantity}
                </div>
                <div>
                  <AiFillDelete onClick={() => removeFromCart(item.id)} className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">Ksh. {calculateTotal(item.price, item.quantity)}</h5>
              </div>
            </div>
            ))}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: Ksh. {calculateCartTotal(cartItems)}</h4>
                <p>Tax and delivery calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
