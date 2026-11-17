import { useSelector } from "react-redux";
import "./CartList.css";
import { useDispatch } from "react-redux";
import { removeItem, clearAllItem } from "./redux/slice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector);
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(cartSelector);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      item.qty ? total + item.price * item.qty : total + item.price,
    0,
  );

  const UpdateQty = (id, qty) => {
    // console.log(id, qty);
    let quantity = parseInt(qty) > 1 ? parseInt(qty) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id == id ? { ...item, qty: quantity } : item;
    });
    setCartItems(cartTempItems);
  };

  const OrderPlaceHandler = () => {
    localStorage.clear();
    dispatch(clearAllItem());
    toast.success("Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <header className="brand-header">
        <h2>🛍️ SHOPZONE</h2>
        <span>Your Shopping Cart</span>
      </header>

      <h2 className="cart-heading">Cart Items</h2>

      {cartItems.length > 0 ? (
        <>
          <div className="cart-products">
            {cartItems.map((item) => (
              <div className="cart-product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />

                <div className="product-info">
                  <h3>{item.title}</h3>
                  <p>
                    $
                    {item.qty
                      ? (item.price * item.qty).toFixed(2)
                      : item.price.toFixed(2)}
                  </p>
                  <span>
                    Qty:
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={item.qty ? item.qty : 1}
                      placeholder="Enter Quantity"
                      onChange={(e) => UpdateQty(item.id, e.target.value)}
                    />
                  </span>
                  <span></span>
                  <span>
                    <button
                      className="btn btn-dangerCart"
                      onClick={() => dispatch(removeItem(item))}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span className="free">FREE</span>
            </div>

            <hr />

            <div className="summary-row total">
              <h3>Total Amount</h3>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>

            <button className="checkout-btn" onClick={OrderPlaceHandler}>
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h3>Your Cart is Empty!</h3>
          <p>Add some products to continue shopping.</p>
        </div>
      )}
    </div>
  );
}

export default CartList;
