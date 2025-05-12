import './Profil.css'

export default function Profil() {
    return (
        <>
            <div className="content-profil">
                <div className="list-menu-profil">
                    <div className="title-menu-profil">
                        <h3>Ubah Profil</h3>
                        <span>Ubah data diri Anda</span>
                    </div>
                    <div className="list-menu-content-profil">
                        <ul> 
                            <li><a>Profil Saya</a></li>
                            <li><a>Kelas Saya</a></li>
                            <li><a>Pesanan Saya</a></li>
                        </ul>
                    </div>
                </div>
                <div className="edit-profil">
                    <div className="profil">
                        <div className="image-profil">
                            <img src="img/profile-avatar.png" alt="" />
                        </div>
                        <div className="profile-desc">
                            <h3>Jennie Ruby Jane</h3>
                            <p>rubyjane@gmail.com</p>
                            <a><p>Ganti Foto Profil</p></a>
                        </div>
                    </div>
                    <div className="divider-profil"><hr/></div>
                    <div className="form-edit-profil">
                        <form action="">
                            <div className="form-wrapper-profil">
                                <div className="form-group-profil">
                                    <input type="text" name="namalengkap" id="namalengkap" />
                                    <label htmlFor="name">Nama Lengkap</label>
                                </div>
                                <div className="form-group-profil">
                                    <input type="email" name="email" id="email" />
                                    <label htmlFor="email">E-Mail</label>
                                </div>
                                <div className="form-group-profil">
                                    <select className="country-code-profil">
                                        <option value="+62">+62</option>
                                        <option value="+60">+60</option>
                                        <option value="+65">+65</option>
                                    </select>
                                </div>
                                <div className="form-group-profil">
                                    <input type="number" name="nohp" id="nohp" />
                                    <label htmlFor="nohp">No. Hp</label>
                                </div>
                            </div>
                            <div className="btn-wrapper-profil">
                                <button type="submit" className="btn-simpan-profil">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}