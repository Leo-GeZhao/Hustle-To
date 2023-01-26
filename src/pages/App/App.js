/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/Account/LoginForm/LoginForm";
import SignUpForm from "../../components/Account/SignUpForm/SignUpForm";
import LandingPage from "../CustomerPage/LandingPage/LandingPage";
import DetailPage from "../CustomerPage/DetailPage/DetailPage";
import Inventory from "../AdminPage/Inventory";
import AddInventory from "../AdminPage/AddInventory";
import ProductDetail from "../AdminPage/ProductDetail";
import Banner from "../AdminPage/Banner";
import Product from "../../components/Product/Product";
import Checkout from "../CustomerPage/Cart/Cart";
import Success from "../CustomerPage/Success/Success";
import OrderHistory from "../CustomerPage/OrderHistory/OrderHistory";

//User Service
import { getUser } from "../../utilities/services/users";

//APIs
import * as adminAPI from "../../utilities/api/admin";
import * as cartAPI from "../../utilities/api/cart";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [sneakers, setSneakers] = useState([]);
  const [banners, setBanners] = useState([]);
  const [cart, setCart] = useState(null);
  const [update, setUpdate] = useState(false);

  //Get All Sneakers
  useEffect(
    function () {
      const getSneakers = async () => {
        const sneakers = await adminAPI.getSneakers();
        setSneakers(sneakers.data);
      };
      getSneakers();
      setUpdate(false);
    },
    [update]
  );

  //Get All Banners
  useEffect(
    function () {
      const getBanners = async () => {
        const Banners = await adminAPI.getBanners();
        setBanners(Banners.data);
      };
      getBanners();
      setUpdate(false);
    },
    [update]
  );

  // Get the Customer Cart
  useEffect(
    function () {
      const getCart = async () => {
        const data = { user: user._id };
        const cart = await cartAPI.getCart(data);
        setCart(cart.data);
      };

      getCart();
      setUpdate(false);
    },
    [update]
  );

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} cart={cart} />
      <div>
        <Routes>
          <Route
            path="/login"
            element={<LoginForm setUser={setUser} setUpdate={setUpdate} />}
          />
          <Route
            path="/createaccount"
            element={<SignUpForm setUser={setUser} setUpdate={setUpdate} />}
          />
          <Route
            path="/admin/product"
            element={
              <Inventory
                user={user}
                sneakers={sneakers}
                setSneakers={setSneakers}
                setUpdate={setUpdate}
              />
            }
          />
          <Route
            path="/admin/product/:sneakerName"
            element={
              <ProductDetail setSneakers={setSneakers} setUpdate={setUpdate} />
            }
          />
          <Route
            path="/admin/addinventory"
            element={
              <AddInventory
                sneakers={sneakers}
                setSneakers={setSneakers}
                setUpdate={setUpdate}
              />
            }
          />
          <Route
            path="/admin/banner"
            element={
              <Banner
                user={user}
                banners={banners}
                setBanners={setBanners}
                update={update}
                setUpdate={setUpdate}
              />
            }
          />
          <Route path="/" element={<LandingPage banners={banners} />} />

          <Route
            path="/product/:sneakerName"
            element={<DetailPage user={user} setUpdate={setUpdate} />}
          />
          <Route path="/:brand" element={<Product />} />
          <Route
            path="/cart"
            element={<Checkout user={user} setUpdate={setUpdate} cart={cart} />}
          />
          <Route path="/success" element={<Success user={user} />} />
          <Route
            path="/orders"
            element={
              <OrderHistory
                user={user}
                // update={update}
                // setUpdate={setUpdate}
                // cart={cart}
              />
            }
          />
        </Routes>
      </div>
      <Footer user={user} setUser={setUser} />
    </main>
  );
}
