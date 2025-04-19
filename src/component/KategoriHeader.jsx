export default function KategoriHeader(){
    return(
        <>
            <div className="menu">
                <img src="img/hamburger.png" className="mobile-menu" />
                <nav className="dropdown-kategori">
                    <span>Kategori</span>
                    <div className="dropdown-content">
                    <ul>
                        <li>
                        <a href="#">Profil Saya</a>
                        </li>
                        <li>
                        <a href="#">Kelas Saya</a>
                        </li>
                        <li>
                        <a href="#">Pesanan Saya</a>
                        </li>
                        <li>
                        <a href="#">Keluar</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                <div className="avatar">
                    <img src="img/Avatar.png" alt="" />
                </div>
            </div>
        </>
    )
}