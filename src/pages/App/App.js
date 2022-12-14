/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/Account/LoginForm/LoginForm';
import SignUpForm from '../../components/Account/SignUpForm/SignUpForm';
import LandingPage from '../CustomerPage/LandingPage/LandingPage';
import DetailPage from '../CustomerPage/DetailPage/DetailPage';
import AdminPage from '../AdminPage/AdminPage';
import AddInventoryPage from '../AdminPage/AddInventoryPage';
import AdminProductDetailPage from '../AdminPage/AdminProductDetailPage';
import Banner from '../AdminPage/Banner';

//helper
import { getUser } from '../../utilities/services/users';
import * as adminAPI from '../../utilities/api/admin'


import './App.css';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [sneakers, setSneakers] = useState([])
  const [banners,setBanners] = useState([])

  useEffect(function(){
    async function getSneakers(){
      const allSneakers = await adminAPI.getSneakers();
      setSneakers(...sneakers, allSneakers)
    }
    getSneakers();
  },[]);

  useEffect(function(){
    async function getBanners(){
      const allBanners = await adminAPI.getBanners();
      setBanners(...banners,allBanners)
    }
    getBanners();
  },[])

  return (
    <main className="App">
            <NavBar user={user} setUser={setUser}/>
            <div>
              <Routes>
                {/* Route components in here */}
                <Route path="/login" element={<LoginForm setUser={setUser}/>} />
                <Route path="/createaccount" element={<SignUpForm setUser={setUser}/>} />
                <Route path="/admin/product" element={<AdminPage user={user} sneakers={sneakers} setSneakers={setSneakers}/>} />
                <Route path="/admin/product/:sneakerName" element={<AdminProductDetailPage setSneakers={setSneakers} sneaker={sneakers}/>} />
                <Route path="/admin/addinventory" element={<AddInventoryPage sneakers={sneakers} setSneakers={setSneakers}/>} />
                <Route path="/admin/banner" element={<Banner user={user} banners={banners} setBanners={setBanners}/>} />
                <Route path="/" element={<LandingPage sneakers={sneakers} setSneakers={setSneakers} banners={banners} setBanners={setBanners} />} />
                <Route path="/product/:sneakerName" element={<DetailPage />} />
              </Routes>
            </div>
            <Footer user={user} setUser={setUser}/>
    </main>
  );
}
