import { Link } from "react-router";

import './Login.css'
export default function Login(){
    return(
        <>
            
            <div className="content">
                <div className="login-wrapper">
                    <div className="head-login">
                        <h2>Masuk ke Akun</h2>
                        <p>Yuk, lanjutin belajarmu di videobelajar</p>
                    </div>
                    <div className="form-login">
                        <form action="#">
                            <label htmlFor="label-email">E-mail <span className="red-label">*</span></label>
                            <input type="email" id="email" name="email" />
                            <label htmlFor="label-katasandi">Kata Sandi <span className="red-label">*</span></label>
                            <input type="password" id="password" name="password" />
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