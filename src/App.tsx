import { memo } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";

const App = () => {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"cart"}>Cart</NavLink>
      <NavLink to={"wishlist"}>Wishlist</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
};

export default memo(App);
