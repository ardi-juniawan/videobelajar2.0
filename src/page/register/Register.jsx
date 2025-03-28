import { Link } from "react-router";

import './Register.css'
import { useState } from "react";
import axios from "axios";
export default function Register(){
    const [namaLengkap, setNamaLengkap] = useState('');
    const [email, setEmail] = useState('');
    const [noHp, setNoHp] = useState('');
    const [kataSandi, setKataSandi] = useState('');
    const [konfirmKataSandi, setKonfirmKataSandi] = useState('');

    const API_URL = 'http://localhost:8000/user';

    //tambah data
    async function addData(e){
        e.preventDefault()
        if(!namaLengkap || !email || !noHp || !kataSandi){
            alert('Lengkapi data terlebih dahulu');
        }else if(kataSandi !== konfirmKataSandi){
            alert('Kata sandi tidak sama');
        }else{
            await axios.post(API_URL, {namaLengkap, email, noHp, kataSandi});
            setNamaLengkap('')
            setEmail('')
            setNoHp('')
            setKataSandi('')
        }
    }

    return(
        <>
            <div className="content">
                <div className="login-wrapper">
                    <div className="head-login">
                    <h2>Pendaftaran Akun</h2>
                    <p>Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>
                    <div className="form-login">
                    <form type="submit" onSubmit={addData}>
                        <label htmlFor="label-namalengkap">
                        Nama Lengkap <span className="red-label">*</span>
                        </label>
                        <input type="text" id="namalengkap" name="namalengkap" value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} />
                        <label htmlFor="label-email">
                        E-mail <span className="red-label">*</span>
                        </label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                            <input type="number" id="nohp" name="nohp" value={noHp} onChange={(e) => setNoHp(e.target.value)} />
                        </div>
                        </div>
                        <label htmlFor="label-katasandi">
                        Kata Sandi <span className="red-label">*</span>
                        </label>
                        <input type="password" id="password" name="password" value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} />
                        <label htmlFor="label-konfirmasi-katasandi">
                        Konfirmasi Kata Sandi <span className="red-label">*</span>
                        </label>
                        <input type="password" id="confirmpassword" name="confirmpassword" value={konfirmKataSandi} onChange={(e) => setKonfirmKataSandi(e.target.value)} />
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