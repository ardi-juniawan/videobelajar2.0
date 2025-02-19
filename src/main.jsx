import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './page/login/Login';
import Register from './page/register/Register';
import Header from './page/header/Header.jsx';
import Dashboard from './page/dashboard/Dashboard.jsx';
import DynamicTitle from './DinamycTitle.jsx';

//Testing Only
// import Testing from './page/testingpage/Index'


createRoot(document.getElementById('root')).render(
  // <Testing/>
  <BrowserRouter>
  <DynamicTitle/>
  <Header/>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/beranda' element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
)
