import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/Account/LoginForm/LoginForm';
import SignUpForm from '../../components/Account/SignUpForm/SignUpForm';
import ProductPage from '../ProductPage/ProductPage';
import AdminPage from '../AdminPage/AdminPage';
import AddInventoryPage from '../AdminPage/AddInventoryPage';
import AdminProductDetailPage from '../AdminPage/AdminProductDetailPage';

//helper
import { getUser } from '../../utilities/services/users';
import * as adminAPI from '../../utilities/api/sneakers'


import './App.css';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [sneakers, setSneakers] = useState([])

  useEffect(function(){
    async function getSneakers(){
      const sneakers = await adminAPI.getSneakers();
      setSneakers(sneakers)
    }
    getSneakers();
  },[]);


  return (
    <main className="App">
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/login" element={<LoginForm setUser={setUser}/>} />
              <Route path="/createaccount" element={<SignUpForm setUser={setUser}/>} />
              <Route path="/" element={<ProductPage sneakers={sneakers} setSneakers={setSneakers} />} />
              <Route path="/admin/product" element={<AdminPage user={user} sneakers={sneakers}/>} />
              <Route path="/admin/product/:sneakerName" element={<AdminProductDetailPage setSneakers={setSneakers} sneaker={sneakers}/>} />
              
              <Route path="/admin/addinventory" element={<AddInventoryPage user={user}/>} />
            </Routes>
            <Footer user={user} setUser={setUser}/>
    </main>
  );
}
