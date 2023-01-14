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

//helper
import { getUser } from "../../utilities/services/users";
import * as adminAPI from "../../utilities/api/admin";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [sneakers, setSneakers] = useState([]);
  const [banners, setBanners] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(
    function () {
      async function getSneakers() {
        const sneakers = await adminAPI.getSneakers();
        setSneakers(sneakers);
      }
      getSneakers();
      setUpdate(false);
    },
    [update]
  );

  useEffect(
    function () {
      async function getBanners() {
        const Banners = await adminAPI.getBanners();
        setBanners(Banners.data);
      }
      getBanners();
      setUpdate(false);
    },
    [update]
  );

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <div>
        <Routes>
          {/* Route components in here */}
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
          <Route
            path="/createaccount"
            element={<SignUpForm setUser={setUser} />}
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
          <Route
            path="/"
            element={
              <LandingPage
                sneakers={sneakers}
                setSneakers={setSneakers}
                banners={banners}
                setBanners={setBanners}
              />
            }
          />

          <Route
            path="/product/:sneakerName"
            element={<DetailPage user={user} />}
          />
          <Route path="/:brand" element={<Product />} />
          <Route
            path="/cart"
            element={
              <Checkout user={user} update={update} setUpdate={setUpdate} />
            }
          />
        </Routes>
      </div>
      <Footer user={user} setUser={setUser} />
    </main>
  );
}
