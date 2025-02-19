import Login from './page/login/Login';
import Register from './page/register/Register';
import Header from './page/header/Header.jsx';
import Dashboard from './page/dashboard/Dashboard.jsx';
import DynamicTitle from './DinamycTitle.jsx';
import { BrowserRouter, Routes, Route } from 'react-router'

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
        </Routes>
    </BrowserRouter>
    )
}
export default App