import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./CartList";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/CartList" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
