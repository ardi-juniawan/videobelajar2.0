import { useLocation } from 'react-router';
import './Footer.css';

export default function Footer(){
    const location = useLocation()
    const hideFooter = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '*' || location.pathname === '/'
    if (hideFooter) return null
    return(
    <>
    <div className="footer">
                <div className="footer-wrapper">
                <div className="top-footer">
                    <div className="footer-title">
                    <img src="img/logo.png" alt="" />
                    <p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                    <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    <p>+62-877-7123-1234</p>
                    </div>
                    <div className="list-footer">
                    <div className="list">
                        <ul>
                        <li>Kategori</li>
                        <li>Digital &amp; Teknologi</li>
                        <li>Pemasaran</li>
                        <li>Manajemen Bisnis</li>
                        <li>Pengembangan Diri</li>
                        <li>Desain</li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul>
                        <li>Perusahaan</li>
                        <li>Digital &amp; Teknologi</li>
                        <li>Pemasaran</li>
                        <li>Manajemen Bisnis</li>
                        <li>Pengembangan Diri</li>
                        <li>Desain</li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul>
                        <li>Komunitas</li>
                        <li>Digital &amp; Teknologi</li>
                        <li>Pemasaran</li>
                        <li>Manajemen Bisnis</li>
                        <li>Pengembangan Diri</li>
                        <li>Desain</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="footer-sosmed">
                    <div className="copyright">
                        @2023 Gerobak Sayur All Rights Reserved.
                    </div>
                    <div className="sosmed">
                        <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href="">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        <a href="">
                        <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                        <a href="">
                        <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </>

    )
}