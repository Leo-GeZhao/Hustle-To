import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import ProductPage from '../ProductPage/ProductPage';
import AdminPage from '../AdminPage/AdminPage';

//helper
import { getUser } from '../../utilities/services/users';


import './App.css';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/login" element={<LoginForm setUser={setUser}/>} />
              <Route path="/createaccount" element={<SignUpForm setUser={setUser}/>} />
              <Route path="/" element={<ProductPage/>} />
              <Route path="/admin" element={<AdminPage/>} />
            </Routes>
            <Footer user={user} setUser={setUser}/>
    </main>
  );
}
