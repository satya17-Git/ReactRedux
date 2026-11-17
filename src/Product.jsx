import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";
import "./product.css";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  // console.log(productSelector);

  const cartSelector = useSelector((state) => state.cart.items);

  return (
    // <div className="product-card">
    //   <img
    //     src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6p-cML7E6gnCd-7I5IxVuoYEJFT2vWGIp-FzdGJ6jAXftp1qP43amWRikaCnpJpM92HpfStkuuOjhe5ptUdBBCBlbI39Lv6s68bupRf5-7iN7P4TDZkQyPghttps://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQyOZB-3cKKxgbzxWaTb6xSXYFKqph8CZCJuZmJ9rYKA3iQz2jzSQS3GA0jO5DQc3kR1UIcMSVQynF0cdvPlB1Jhn5zKSV06mWHKu7fpr1qXxUuY0yTsgJUnuSecyJLPvFvcoEoIs&usqp=CAchttps://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSv0frOU1ViMxz1Br72UciuCCdaDaKKp4cXAg9IRT02hJmm3csatIJ6G5NsMM7394e6PUvhrxHWIZFDbPd1hv9P4hMK1OQ46W5oh8TWWrietx7ajkCOy2Uu_XR-kcNToakhjGLLF1s&usqp=CAchttps://www.google.com/aclk?sa=L&ai=DChsSEwj30OvXnLGVAxWXqWYCHVf9MDMYACICCAEQCRoCc20&co=1&ase=2&gclid=EAIaIQobChMI99Dr15yxlQMVl6lmAh1X_TAzEAQYBSABEgJmpfD_BwE&cid=CAASuwHkaDl4qpdv2usCH8yXXj8fZB_Oogi_OJJKyyXdkMqOHlUiLkG09tk0kznlUnGKKKFSboB2YfRVi2Q8-9aK8uzdGfaJ26GXN1zuIohx6S2x3ZbVzwWjaiNMWjcyi2tTtAep6aY-8n86rJ7Zv5LpmW_LZmw3NyXBtW6moSCi9HcWWXly7YbqX0U-2do5jUG8hY9hqB2aQSW7pshUw-xealGhO5G3_T5E5zp7Y8Kyn8OTzxksqP67nZSpEcd-&cce=2&category=acrcp_v1_32&sig=AOD64_1ie4rL60OiDedKjYKuDKV1TUrqXA&ctype=5&q=&nis=4&ved=2ahUKEwiusufXnLGVAxVe4TgGHc9cF6UQ9aACKAB6BAgGEDk&adurl="
    //     alt="Product"
    //     className="product-image"
    //   />

    //   <div className="product-info">
    //     <h3>Wireless Headphones</h3>
    //     <p className="description">
    //       Premium quality wireless headphones with noise cancellation.
    //     </p>

    //     <h2 className="price">$99.99</h2>

    //     <button className="btn" onClick={() => dispatch(addItem(1))}>
    //       Add to Cart
    //     </button>

    //     <button
    //       className="btn btn-remove"
    //       onClick={() => dispatch(removeItem(1))}
    //     >
    //       Remove From Cart
    //     </button>
    //   </div>
    // </div>

    <div className="grid">
      {productSelector.length &&
        productSelector.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>
              {cartSelector.find((cartItem) => cartItem.id == item.id) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(removeItem(item))}
                >
                  Remove from Cart
                </button>
              ) : (
                <button className="btn" onClick={() => dispatch(addItem(item))}>
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
