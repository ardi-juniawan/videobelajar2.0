import './Header.css'
import KategoriHeader from '../../component/KategoriHeader'
import { useLocation } from 'react-router'

export default function Header(){

    const location = useLocation()
    const hideKategori = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '*' || location.pathname === '/'

    return(
        <>
            <div className="header">
                <div className="logo">
                    <img src="img/logo.png" alt="videobelajar" />
                </div>
                {!hideKategori && <KategoriHeader />}
            </div>
        </>
    )
}