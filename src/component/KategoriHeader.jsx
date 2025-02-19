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
                        <a href="#">Beranda</a>
                        </li>
                        <li>
                        <a href="#">Beranda</a>
                        </li>
                        <li>
                        <a href="#">Test</a>
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