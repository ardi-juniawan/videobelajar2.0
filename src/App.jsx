import Login from './page/login/Login';
import Register from './page/register/Register';
import Header from './page/header/Header.jsx';
import Footer from './page/footer/Footer.jsx';
import Dashboard from './page/dashboard/Dashboard.jsx';
import NotFound from './page/notfound/NotFound.jsx';
import DynamicTitle from './DinamycTitle.jsx';
import ListView from './component/ListView.jsx';
import Profil from './page/profil/Profil.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';


function App(){
    return(
    <BrowserRouter>
        <DynamicTitle/>
        <Header/>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/beranda' element={<Dashboard/>} />
            <Route path='/profil' element={<Profil />} />

            <Route path='*' element={<NotFound />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/listview' element={<ListView />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    )
}
export default App