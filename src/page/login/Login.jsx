import { Link, useNavigate } from "react-router";
import { getUsers } from "../../services/api/userService";
import './Login.css'
import { useState } from "react";
export default function Login(){
    const [formData, setFormData] = useState({email: '', kataSandi: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
      };
    
      const handleLogin = async (e) => {
        e.preventDefault();
        const res = await getUsers();
        const users = res.data;
    
        const user = users.find(u => u.email === formData.email && u.password === formData.password);
        if (user) {
          alert('Login berhasil!');
          navigate('/beranda');
        } else {
          alert('Email atau password salah!');
        }
      };
    return(
        <>
            
            <div className="content">
                <div className="login-wrapper">
                    <div className="head-login">
                        <h2>Masuk ke Akun</h2>
                        <p>Yuk, lanjutin belajarmu di videobelajar</p>
                    </div>
                    <div className="form-login">
                        <form onSubmit={handleLogin}>
                            <label htmlFor="label-email">E-mail <span className="red-label">*</span></label>
                            <input type="email" id="email" name="email" onChange={handleChange} required />
                            <label htmlFor="label-katasandi">Kata Sandi <span className="red-label">*</span></label>
                            <input type="password" id="kataSandi" name="kataSandi" onChange={handleChange} required />
                            <a href="#">Lupa password?</a>
                            <button type="submit" className="masuk-button">Masuk</button>
                        </form>
                        <Link to="/register">
                            <button type="button" className="daftar-button">Daftar</button>
                        </Link>
                        <div className="divider">
                            <span>atau</span>
                        </div>
                        <button type="button" className="sign-google"><i className="fa fa-google" aria-hidden="true"></i> Masuk dengan Google</button>
                    </div>
                </div>
            </div>
        </>
    )
}