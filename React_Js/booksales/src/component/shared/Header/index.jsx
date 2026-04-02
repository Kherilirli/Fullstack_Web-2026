import { Link } from "react-router";
import style from './style/header.module.css';

export default function Header() {
    return (
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

                {/* Logo */}
                <div className="col-md-3 mb-2 mb-md-0">
                    <Link to="/" className={`d-inline-block align-items-center text-decoration-none ${style.logoHover}`}>
                        <i className={`fa-solid fa-book fa-2xl ${style.iconHover}`}></i>
                        <span className="ms-2 fs-4">Bookstore</span>
                    </Link>
                </div>

                {/* Menu */}
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className={`nav-link px-2 ${style.navLink}`}>Home</Link></li>
                    <li><Link to="/books" className={`nav-link px-2 ${style.navLink}`}>Book</Link></li>
                    <li><Link to="/team" className={`nav-link px-2 ${style.navLink}`}>Team</Link></li>
                    <li><Link to="/contact" className={`nav-link px-2 ${style.navLink}`}>Contact</Link></li>
                </ul>

                {/* Button */}
                <div className="col-md-3 text-end">
                    <Link to="/login">
                        <button className="btn btn-outline-primary me-2">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn btn-primary ">Register</button>
                    </Link>
                </div>

            </header>
        </>
    )
}