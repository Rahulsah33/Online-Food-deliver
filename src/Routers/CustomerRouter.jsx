import { Routes, Route } from "react-router-dom";
import { Navbar } from "../component/NavBar/Navbar";

import Home from "../component/HomePage/Home";
import Profile from "../component/Profile/Profile";
import ResturantDetails from "../component/Resturant/ResturantDetails";
import Cart from "../component/Cart/Cart";
import Auth from "../component/Authentication/Auth";

const CustomerRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Account */}
        <Route path="/account/:register" element={<Home />} />

        {/* Restaurant details */}
        <Route
          path="/resturant/:city/:title/:id"
          element={<ResturantDetails />}
        />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Profile with nested routes */}
        <Route path="/my-profile/*" element={<Profile />} />
      </Routes>

      <Auth />
    </>
  );
};

export default CustomerRouter;
