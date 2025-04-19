import { Link, useNavigate } from "react-router";
import { addUser } from "../../services/api/userService";
import './Register.css'
import { useState } from "react";
export default function Register(){
    const [formData, setFormData] = useState({namaLengkap: '', email: '', noHp: '', kataSandi: '', konfirmKataSandi: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(formData);
        navigate('/login');
      };

    return(
        <>
            <div className="content">
                <div className="login-wrapper">
                    <div className="head-login">
                    <h2>Pendaftaran Akun</h2>
                    <p>Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>
                    <div className="form-login">
                    <form type="submit" onSubmit={handleSubmit}>
                        <label htmlFor="label-namalengkap">
                        Nama Lengkap <span className="red-label">*</span>
                        </label>
                        <input type="text" id="namalengkap" name="namalengkap" onChange={handleChange} />
                        <label htmlFor="label-email">
                        E-mail <span className="red-label">*</span>
                        </label>
                        <input type="email" id="email" name="email" onChange={handleChange} />
                        <label htmlFor="label-nohp">
                        Nomor HP <span className="red-label">*</span>
                        </label>
                        <div className="no-hp">
                        <div className="region">
                            <label htmlFor="flag" className="flag">
                            <img src="img/indonesia.png" alt="Indonesia" />
                            </label>
                            <select name="kode" id="kode">
                            <option value={+62}>+62</option>
                            </select>
                        </div>
                        <div className="number">
                            <input type="number" id="nohp" name="nohp" onChange={handleChange} />
                        </div>
                        </div>
                        <label htmlFor="label-katasandi">
                        Kata Sandi <span className="red-label">*</span>
                        </label>
                        <input type="password" id="kataSandi" name="kataSandi" onChange={handleChange} />
                        <label htmlFor="label-konfirmasi-katasandi">
                        Konfirmasi Kata Sandi <span className="red-label">*</span>
                        </label>
                        <input type="password" id="konfirmKataSandi" name="konfirmKataSandi" onChange={handleChange} />
                        <a href="#">Lupa password?</a>
                        <button type="submit" className="masuk-button">
                        Daftar
                        </button>
                    </form>
                    <Link to="/login">
                        <button type="button" className="daftar-button">
                            Masuk
                        </button>
                    </Link>
                    <div className="divider">
                        <span>atau</span>
                    </div>
                    <button type="button" className="sign-google">
                        <i className="fa fa-google" aria-hidden="true" /> Masuk dengan Google
                    </button>
                    </div>
                </div>
            </div>

        </>
    )
}