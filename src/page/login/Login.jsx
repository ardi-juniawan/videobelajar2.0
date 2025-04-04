import { Link, useNavigate } from "react-router";

import './Login.css'
import { useState } from "react";
import axios from "axios";
export default function Login(){
    const [email,setEmail] = useState('');
    const [kataSandi,setKataSandi] = useState('');
    const navigate = useNavigate();

    async function handlelogin(e){
        e.preventDefault();
        const response = await axios.get(`http://localhost:8000/user?email=${email}&kataSandi=${kataSandi}`);
        if(response.data.length > 0){
            navigate('/beranda');
            alert('berhasil')
        }
        else{
            alert('Email atau kata sandi salah!');
        }
    }

    return(
        <>
            
            <div className="content">
                <div className="login-wrapper">
                    <div className="head-login">
                        <h2>Masuk ke Akun</h2>
                        <p>Yuk, lanjutin belajarmu di videobelajar</p>
                    </div>
                    <div className="form-login">
                        <form onSubmit={handlelogin}>
                            <label htmlFor="label-email">E-mail <span className="red-label">*</span></label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="label-katasandi">Kata Sandi <span className="red-label">*</span></label>
                            <input type="password" id="password" name="password" value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} required />
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